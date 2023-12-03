import { isDefined } from '@komore/functional';
import { first, map, mergeMap, of, tapNext, type Observable } from '@komore/reactive';
import { assert } from '@komore/runtime';
import {
  generateWorkspaceExecutorTaskId,
  projectNameToProjectConfiguration,
  type WorkspaceContext,
} from '@komore/schematics';
import { isExecutorReferenceString } from '@komore/schematics';

import { type TaskRunner } from './task-runner';

/**
 * Creates a task runner
 *
 * @param options Options
 * @param workspaceContext Workspace context
 * @returns Task runner
 */
export function createTaskRunner(_options: unknown, workspaceContext: WorkspaceContext): Observable<TaskRunner> {
  // TODO: dispatch among workers
  const toProjectConfiguration = projectNameToProjectConfiguration(workspaceContext);
  const { byReferenceString } = workspaceContext.schematics.executor;
  const parallelism = 1;

  const taskRunner: TaskRunner = $ =>
    $.pipe(
      tapNext(({ projectName, taskName }) => `attempting to run task "${taskName}" on project "${projectName}"...`),
      mergeMap(
        ({ projectName, taskName }) =>
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
          ),
        parallelism
      ),
      mergeMap(({ projectName, projectConfiguration: _, taskName, taskConfiguration }) => {
        const { executor: executorReferenceString } = taskConfiguration;

        if (!isExecutorReferenceString(executorReferenceString)) {
          console.log('not implemented', executorReferenceString);
          throw new Error(`composite executors not implemented (todo: typed)`);
        }

        const workspaceContextExecutor$ = byReferenceString.get(executorReferenceString);
        assert(isDefined(workspaceContextExecutor$));

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
      })
    );

  return of(taskRunner);
}
