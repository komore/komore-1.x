import { ProjectConfiguration } from '../project/project-configuration';
import { InvalidTaskConfigurationError } from './invalid-task-configuration-error';
import { TaskConfiguration } from './task-configuration';
import { TaskName } from './task-name';

export function taskNameToTaskConfiguration(
  projectConfiguration: ProjectConfiguration
): (taskName: TaskName) => TaskConfiguration {
  const { tasks } = projectConfiguration;
  return taskName => {
    const task = tasks[taskName];
    if (task === undefined) {
      throw new InvalidTaskConfigurationError
      throw new Error(`TODO (typed + project name) no task "${taskName}" found`);
    }

    return task;
  };
}
