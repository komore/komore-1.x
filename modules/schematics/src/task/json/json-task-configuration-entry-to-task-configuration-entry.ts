import { isExecutorReferenceString } from '../../executor/is-executor-reference-string';
import { type ProjectName } from '../../project/project-name';
import { invalidExecutorReference, invalidTaskName } from '../invalid-task-configuration-errors';
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
  entry: readonly [taskName: string, jsonConfiguration: JsonTaskConfiguration]
) => readonly [taskName: TaskName, configuration: TaskConfiguration] {
  return ([taskName, { executor, inputs = [], outputs = [], options }]) => {
    if (!isTaskName(taskName)) {
      throw invalidTaskName({ taskName });
    }

    if (!isExecutorReferenceString(executor)) {
      throw invalidExecutorReference({ executor, taskName });
    }

    return [
      taskName,
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
