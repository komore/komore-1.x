import { concatMap, map, mapTo, take, tapNext, type Observable } from '@komore/reactive';
import {
  packageReferenceNameToPackageReference,
  packageReferenceToExportedEntry,
  type WorkspaceContext,
  type WorkspaceExecutor,
} from '@komore/schematics';
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
  return workspaceContext.configuration.pipe(
    take(1),
    map(workspaceConfiguration => {
      //const packages = new Map<string, Observable<unknown>>();

      const taskRunner: TaskRunner = $ =>
        $.pipe(
          concatMap(({ projectName, taskName }) => {
            const taskConfiguration = workspaceConfiguration.projects[projectName]?.tasks?.[taskName];
            if (taskConfiguration === undefined) {
              throw new Error(`runner cannot find task ${taskName} in project ${projectName}`);
            }

            const executor =
              typeof taskConfiguration.executor === 'string'
                ? taskConfiguration.executor
                : '???TODOcompositeExecutor???';
            // TODO:
            // 1. executor
            // 2. => package|executor
            // 3. => package.json
            // 4. => executors.json
            workspaceContext.schematics.executors;// get execute from in there
            const packageReference = packageReferenceNameToPackageReference(executor);
            console.log(`running task ${taskName} of ${projectName}`, taskConfiguration, executor);
            return packageReferenceToExportedEntry<WorkspaceExecutor<unknown>>(packageReference).pipe(
              tapNext(x => {
                console.log('and got x', x);
              }),
              mapTo(4)
            );
          })
        );

      return taskRunner;
    })
  );
}
