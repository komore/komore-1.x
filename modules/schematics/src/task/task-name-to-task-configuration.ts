import { type ProjectConfiguration } from '../project/project-configuration';
import { type TaskConfiguration } from './task-configuration';
import { type TaskName } from './name/task-name';

export function taskNameToTaskConfiguration(
  projectConfiguration: ProjectConfiguration
): (taskName: TaskName) => TaskConfiguration {
  const { tasks } = projectConfiguration;
  return taskName => {
    const task = tasks[taskName];
    if (task === undefined) {
      // TODO: proper error
      throw new Error(`TODO (typed + project name) no task "${taskName}" found`);
    }

    return task;
  };
}
