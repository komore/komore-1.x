import { type TaskReference } from './task-reference';
import { type TaskReferenceString } from './task-reference-string';

/**
 * Returns a task reference, given a task reference string
 *
 * @param taskReferenceString
 * @returns 
 */
export function taskNameToTaskReference(taskReferenceString: TaskReferenceString): TaskReference {
  const split = taskReferenceString.split(':');
  if (split.length !== 2) {
    throw new Error(`invalid workspace task ${taskReferenceString}`);
  }
  const [projectName, taskName] = split as unknown as readonly [string, string];
  return { projectName, taskName };
}
