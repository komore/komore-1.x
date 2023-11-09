import { isExecutorReferenceString } from '../../executor/reference/is-executor-reference-string';
import { type ProjectName } from '../../project/name/project-name';
import { schematicsError } from '../../schematics.error';
import { isTaskName } from '../name/is-task-name';
import { type TaskName } from '../name/task-name';
import { isTaskReferenceString } from '../reference/is-task-reference-string';
import { type TaskReferenceString } from '../reference/task-reference-string';
import { type TaskConfiguration } from '../task-configuration';
import { type TaskConfigurationJson } from './task-configuration-json';

/**
 * Creates a function that returns a valid task configuration entry, given a task configuration JSON entry
 *
 * @param projectName Project name
 * @returns Function that returns a valid task configuration entry, given a task configuration JSON entry
 */
export function taskConfigurationJsonEntryToTaskConfigurationEntry(
  _projectName: ProjectName | undefined
): (
  entry: readonly [taskName: string, taskReferenceOrConfigurationJson: string | TaskConfigurationJson]
) => readonly [taskName: TaskName, configuration: TaskConfiguration] {
  return ([taskName, taskReferenceOrConfigurationJson]) => {
    if (!isTaskName(taskName)) {
      throw schematicsError.invalidTaskName({ value: taskName });
    }

    if (typeof taskReferenceOrConfigurationJson === 'string') {
      // TODO: proper error
      throw new Error(`task reference not supported here with "${taskReferenceOrConfigurationJson}"`);
    }

    const { dependencies = [], executor, inputs = [], outputs = [], options } = taskReferenceOrConfigurationJson;

    validateDependencies(taskName, dependencies);

    if (!isExecutorReferenceString(executor)) {
      throw schematicsError.invalidTaskExecutor({ executor, taskName });
    }

    return [
      taskName,
      {
        dependencies,
        executor,
        inputs,
        outputs,
        options,
      },
    ];
  };
}

function validateDependencies(
  taskName: TaskName,
  dependencies: ReadonlyArray<string>
): asserts dependencies is ReadonlyArray<TaskReferenceString> {
  for (const dependency of dependencies) {
    if (!isTaskReferenceString(dependency)) {
      throw schematicsError.invalidTaskDependency({ dependency, taskName });
    }
  }
}
