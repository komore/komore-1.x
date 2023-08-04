import { type ProjectName } from '../../project/name/project-name';
import { schematicsError } from '../../schematics.error';
import { type TaskName } from '../name/task-name';
import { type TaskReference } from './task-reference';
import { type TaskReferenceString } from './task-reference-string';

/**
 * Returns a task reference, given a task reference string
 *
 * @param taskReferenceString Task reference string
 * @returns Task reference
 */
export function taskReferenceStringToTaskReference(taskReferenceString: TaskReferenceString): TaskReference {
  const split = taskReferenceString.split(':');
  if (split.length !== 2) {
    throw schematicsError('task.reference.invalid.string', { taskReferenceString });
  }
  const [projectName, taskName] = split as unknown as readonly [ProjectName, TaskName];
  return { projectName, taskName };
}
