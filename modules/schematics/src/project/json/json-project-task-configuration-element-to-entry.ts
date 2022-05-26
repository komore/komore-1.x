import { type ReadonlyRecord } from '@komore/typescript';
import { type ExecutorReferenceString } from '../../executor/executor-reference-string';
import { type JsonTaskConfiguration } from '../../task/json/json-task-configuration';
import { type TaskName } from '../../task/task-name';

/**
 * Creates a function that builds a JSON task configuration entry from a set of possible simplified task configuration schemas
 *
 * @param defaultTasks Default tasks
 * @returns Function that builds a JSON task configuration entry from a set of possible simplified task configuration schemas
 */
export function jsonTaskConfigurationElementToEntry(
  defaultTasks: ReadonlyRecord<TaskName, ExecutorReferenceString | JsonTaskConfiguration>
): (
  taskNameOrEntry:
    | TaskName
    | readonly [taskName: TaskName, taskConfiguration: ExecutorReferenceString | JsonTaskConfiguration]
) => readonly [taskName: TaskName, taskConfiguration: ExecutorReferenceString | JsonTaskConfiguration] {
  return taskNameOrEntry => {
    if (typeof taskNameOrEntry === 'string') {
      const taskName = taskNameOrEntry;
      const taskConfiguration = defaultTasks[taskName];
      if (taskConfiguration === undefined) {
        throw new Error(`TODO: (typed) task name ${taskName} has no default task configuration`);
      }
      return [taskName, taskConfiguration];
    } else {
      return taskNameOrEntry;
    }
  };
}
