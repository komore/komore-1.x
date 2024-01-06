import { isString } from '@komore/string';

import { type TaskName } from './task-name';
import { taskNameRegExp } from './task-name-reg-exp';

/**
 * Returns true if a value is a task name
 *
 * @param value Value
 * @returns true if the value is a task name
 */
export function isTaskName(value: unknown): value is TaskName {
  return isString(value) && taskNameRegExp.test(value);
}
