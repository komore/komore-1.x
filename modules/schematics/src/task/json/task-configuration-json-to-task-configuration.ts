import { isExecutorReferenceString } from '../../executor/reference/is-executor-reference-string';
import { schematicsError } from '../../schematics.error';
import { type TaskName } from '../name/task-name';
import { type TaskConfiguration } from '../task-configuration';
import { type TaskConfigurationJson } from './task-configuration-json';
import { validateTaskConfigurationJsonDependencies } from './validate-task-configuration-json-dependencies';

export function taskConfigurationJsonToTaskConfiguration(
  taskName: TaskName
): (taskConfigurationJson: TaskConfigurationJson) => TaskConfiguration {
  return taskConfigurationJson => {
    const { dependencies = [], executor, inputs = [], outputs = [], options } = taskConfigurationJson;

    validateTaskConfigurationJsonDependencies(taskName, dependencies);

    if (!isExecutorReferenceString(executor)) {
      throw schematicsError.invalidTaskExecutor({ executor, taskName });
    }

    return {
      dependencies,
      executor,
      inputs,
      outputs,
      options,
    };
  };
}
