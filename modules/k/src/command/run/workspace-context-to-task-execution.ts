import { cliEvent } from '@komore/cli';
import { type EventFromType } from '@komore/event';
import { endWith, fromArray, map, mergeMap } from '@komore/reactive';
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
): (workspaceContext: WorkspaceContext) => Observable<EventFromType<typeof cliEvent>> {
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
