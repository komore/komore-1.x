import { first, map, mergeMap, of } from '@komore/reactive';
import {
  generateWorkspaceExecutorTaskId,
  isExecutorReferenceString,
  projectNameToProjectConfiguration,
} from '@komore/schematics';

import { type TaskRunner } from './task-runner';
import { type TaskRunnerOptions } from './task-runner-options';

/**
 * Creates a task runner
 *
 * @param options Options
 * @param workspaceContext Workspace context
 * @returns Task runner
 */
export function createTaskRunner(runnerOptions: TaskRunnerOptions): Observable<TaskRunner> {
  // TODO: dispatch among workers
  const { parallel, workspaceContext } = runnerOptions;
  const toProjectConfiguration = projectNameToProjectConfiguration(workspaceContext);
  const { byReferenceString } = workspaceContext.schematics.executor;

  const taskRunner: TaskRunner = $ =>
    $.pipe(
      mergeMap(({ projectName, taskName }) =>
        toProjectConfiguration(projectName).pipe(
          first(),
          mergeMap(projectConfiguration =>
            projectConfiguration.tasks.get(taskName).pipe(
              map(taskConfiguration => ({
                projectName,
                projectConfiguration,
                taskName,
                taskConfiguration,
              }))
            )
          )
        )
      ),
      mergeMap(({ projectName, projectConfiguration: _, taskName, taskConfiguration }) => {
        const { executor: executorReferenceString } = taskConfiguration;

        if (!isExecutorReferenceString(executorReferenceString)) {
          console.log('not implemented', executorReferenceString);
          throw new Error(`composite executors not implemented (todo: typed)`);
        }

        const workspaceContextExecutor$ = byReferenceString.get(executorReferenceString);

        console.log(`running task "${taskName}" (${executorReferenceString}) on project "${projectName}"...`);

        return workspaceContextExecutor$.pipe(
          first(),
          mergeMap(workspaceContextExecutor =>
            workspaceContextExecutor.factory.pipe(
              first(),
              mergeMap(createExecutor => createExecutor({}))
            )
          ),
          mergeMap(executor => {
            const taskId = generateWorkspaceExecutorTaskId();
            const options = taskConfiguration.options ?? {};
            const opts = { taskId, ...options };
            return executor(of(opts));
          })
        );
      }, parallel)
    );

  return of(taskRunner);
}
