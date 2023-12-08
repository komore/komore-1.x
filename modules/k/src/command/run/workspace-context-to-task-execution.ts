import { cliEvent, type CliEvent } from '@komore/cli';
import { endWith, fromArray, map, mergeMap, type Observable } from '@komore/reactive';
import {
  packageReferenceNameToPackageReference,
  packageReferenceToExportedEntry,
  type ProjectName,
  type TaskName,
  type WorkspaceContext,
} from '@komore/schematics';
import { type TaskRunnerFactory } from '@komore/schematics/runner';

import { workspaceExecutorEventToCliEvent } from './workspace-executor-event-to-cli-event';

/**
 * Creates a function that executes a task using a given workspace context
 *
 * @param taskName Task name
 * @param projectNames Project names
 * @returns Function that executes a task using a given workspace context
 */
export function workspaceContextToTaskExecution(
  taskName: TaskName,
  projectNames: ReadonlyArray<ProjectName>
): (workspaceContext: WorkspaceContext) => Observable<CliEvent> {
  const taskReferences$ = fromArray(projectNames).pipe(map(projectName => ({ projectName, taskName })));
  console.log('dafuq now', taskName, projectNames);
  return workspaceContext => {
    const { options, runner } = workspaceContext.configuration.task;
    const packageReference = packageReferenceNameToPackageReference(runner);
    return packageReferenceToExportedEntry<TaskRunnerFactory<unknown>>()(packageReference).pipe(
      mergeMap(createTaskRunner => createTaskRunner(options, workspaceContext)),
      mergeMap(taskRunner => taskRunner(taskReferences$).pipe(map(workspaceExecutorEventToCliEvent))),
      endWith(cliEvent.messageDisplayed({ message: 'runExecutor' }))
    );
  };
}
