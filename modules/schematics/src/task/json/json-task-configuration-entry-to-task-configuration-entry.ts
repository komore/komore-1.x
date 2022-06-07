import { isExecutorReferenceString } from '../../executor/is-executor-reference-string';
import { type ProjectName } from '../../project/project-name';
import { InvalidTaskConfigurationError } from '../invalid-task-configuration-error';
import { isTaskName } from '../is-task-name';
import { type TaskConfiguration } from '../task-configuration';
import { type TaskName } from '../task-name';
import { type JsonTaskConfiguration } from './json-task-configuration';

/**
 * Creates a function that returns a valid task configuration entry, given a JSON task configuration entry
 *
 * @param projectName Project name
 * @returns Function that returns a valid task configuration entry, given a JSON task configuration entry
 */
export function jsonTaskConfigurationEntryToTaskConfigurationEntry(
  _projectName: ProjectName | undefined
): (
  entry: readonly [name: string, jsonConfiguration: JsonTaskConfiguration]
) => readonly [name: TaskName, configuration: TaskConfiguration] {
  return ([name, { executor, inputs = [], outputs = [], options }]) => {
    if (!isTaskName(name)) {
      throw InvalidTaskConfigurationError.INVALID_TASK_NAME({ taskName: name });
    }

    if (!isExecutorReferenceString(executor)) {
      throw InvalidTaskConfigurationError(`task ${name} configuration uses an invalid executor reference`);
    }

    return [
      name,
      {
        dependencies: [],
        executor,
        inputs,
        outputs,
        options,
      },
    ];
  };
}
