import { type TaskName } from './task-name';
import { taskNameRegExp } from './task-name-reg-exp';

/**
 * Tests whether a string is a valid task name
 *
 * @param str String
 * @returns true if the string is a valid task name
 */
export function isTaskName(str: string): str is TaskName {
  return taskNameRegExp.test(str);
}
