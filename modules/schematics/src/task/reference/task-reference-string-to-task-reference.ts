import { isArrayOfLength } from '@komore/collection';
import { assert } from '@komore/runtime';

import { validateProjectName } from '../../project/name/validate-project-name';
import { schematicsError } from '../../schematics.error';
import { validateTaskName } from '../name/validate-task-name';
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
  const hasTwoElements = isArrayOfLength(2);
  assert(hasTwoElements(split), () => schematicsError.invalidTaskReferenceString({ taskReferenceString }));
  const [projectName, taskName] = split;
  validateProjectName(projectName);
  validateTaskName(taskName);
  return { projectName, taskName };
}
