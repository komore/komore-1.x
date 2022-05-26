import { isDefined } from '@komore/functional';
import { concatMap, forkJoin, map, mergeMap, of, take, tapNext, type Observable } from '@komore/reactive';
import { assert } from '@komore/runtime';
import {
  projectNameToProjectConfiguration,
  taskNameToTaskConfiguration,
  type WorkspaceContext,
} from '@komore/schematics';
import { isExecutorReferenceString } from 'modules/schematics/src/executor/is-executor-reference-string';
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

  const taskRunner: TaskRunner = $ =>
    $.pipe(
      tapNext(({ projectName, taskName }) => `attempting to run task ${taskName} of ${projectName}`),
      concatMap(({ projectName, taskName }) =>
        toProjectConfiguration(projectName).pipe(
          take(1),
          map(projectConfiguration => {
            const taskConfiguration = taskNameToTaskConfiguration(projectConfiguration)(taskName);
            console.log(taskName, taskConfiguration);
            return {
              projectName,
              projectConfiguration,
              taskName,
              taskConfiguration,
            };
          })
        )
      ),
      mergeMap(({ projectName, projectConfiguration, taskName, taskConfiguration }) => {
        const { executor: executorReferenceString } = taskConfiguration;
        console.log('executor', executorReferenceString, taskConfiguration);
        if (!isExecutorReferenceString(executorReferenceString)) {
          throw new Error(`composite executors not implemented (todo: typed)`);
        }

        const workspaceContextExecutor$ =
          workspaceContext.schematics.executor.byReferenceString.get(executorReferenceString);
        assert(isDefined(workspaceContextExecutor$));

        console.log(`running task ${taskName} of ${projectName}`, taskConfiguration, executorReferenceString);

        return workspaceContextExecutor$.pipe(
          take(1),
          mergeMap(workspaceContextExecutor => {
            const taskConfiguration$ = workspaceContextExecutor.defaultTaskGenerator.pipe(
              take(1),
              mergeMap(defaultTaskGenerator => defaultTaskGenerator(projectConfiguration, workspaceContext))
            );
            const executor$ = workspaceContextExecutor.factory.pipe(
              take(1),
              mergeMap(createExecutor => createExecutor())
            );
            return forkJoin([taskConfiguration$, executor$]);
          }),
          tapNext(([taskConfiguration, executor]) => console.log('and got x', taskConfiguration, executor)),
          mergeMap(([taskConfiguration, executor]) => executor(of(taskConfiguration.options)))
        );
      })
    );

  return of(taskRunner);
}
