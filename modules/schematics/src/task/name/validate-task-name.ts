import { schematicsError } from '../../schematics.error';
import { isTaskName } from './is-task-name';
import { type TaskName } from './task-name';

/**
 * Validates a value is a task name
 *
 * @param value Value
 */
export function validateTaskName(value: unknown): asserts value is TaskName {
  if (!isTaskName(value)) {
    throw schematicsError('task.name.invalid', { value });
  }
}
