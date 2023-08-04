import { type TaskName } from './task-name';
import { validateTaskName } from './validate-task-name';

/**
 * Returns a value as a task name
 *
 * @param value Value
 * @returns Task name
 */
export function asTaskName(value: unknown): TaskName {
  validateTaskName(value);
  return value;
}
