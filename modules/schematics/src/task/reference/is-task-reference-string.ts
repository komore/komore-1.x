import { type TaskReferenceString } from './task-reference-string';
import { taskReferenceStringRegExp } from './task-reference-string-reg-exp';

/**
 * Tests whether a string is a valid task reference string
 *
 * @param str String
 * @returns true if the string is a valid task reference string
 */
export function isTaskReferenceString(str: string): str is TaskReferenceString {
  return taskReferenceStringRegExp.test(str);
}
