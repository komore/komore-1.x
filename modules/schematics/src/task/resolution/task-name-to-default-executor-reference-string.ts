import { type ExecutorReferenceString } from '../../executor/reference/executor-reference-string';
import { type WorkspaceDefaultsConfiguration } from '../../workspace/workspace-defaults-configuration';
import { type TaskName } from '../name/task-name';

/**
 * Creates a function that returns the default executor reference string, given a task name
 *
 * @param tasks Workspace defaults configuration tasks
 * @returns Function that returns the default executor reference string, given a task name
 */
export function taskNameToDefaultExecutorReferenceString(
  tasks: WorkspaceDefaultsConfiguration['tasks']
): (taskName: TaskName) => ExecutorReferenceString | undefined {
  return taskName => tasks[taskName];
}
