import { schematicsError } from '../../schematics.error';
import { type TaskName } from '../name/task-name';
import { isTaskReferenceString } from '../reference/is-task-reference-string';
import { type TaskReferenceString } from '../reference/task-reference-string';

/**
 * Validates a task configuration JSON's dependencies are all valid task reference strings
 *
 * @param taskName Task name
 * @param dependencies List of dependencies
 */
export function validateTaskConfigurationJsonDependencies(
  taskName: TaskName,
  dependencies: ReadonlyArray<string>
): asserts dependencies is ReadonlyArray<TaskReferenceString> {
  for (const dependency of dependencies) {
    if (!isTaskReferenceString(dependency)) {
      throw schematicsError.invalidTaskDependency({ dependency, taskName });
    }
  }
}
