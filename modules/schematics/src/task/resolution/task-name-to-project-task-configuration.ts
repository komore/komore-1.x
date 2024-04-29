import { isString } from '@komore/string';

import { type ExecutorReferenceString } from '../../executor/reference/executor-reference-string';
import { isExecutorReferenceString } from '../../executor/reference/is-executor-reference-string';
import { type ProjectTaskConfigurationsJson } from '../../project/json/project-task-configurations-json';
import { type WorkspaceDefaultsConfiguration } from '../../workspace/workspace-defaults-configuration';
import { taskConfigurationJsonToTaskConfiguration } from '../json/task-configuration-json-to-task-configuration';
import { type TaskName } from '../name/task-name';
import { type TaskConfiguration } from '../task-configuration';
import { projectTaskConfigurationsJsonToRecord } from './project-task-configurations-json-to-record';
import { taskNameToDefaultExecutorReferenceString } from './task-name-to-default-executor-reference-string';

/**
 * Builds a function that returns an executor reference string or a task configuration, given a task name
 *
 * @param defaultTasks Default tasks
 * @returns Function that returns a function that returns an executor reference string or a task configuration
 */
export function taskNameToProjectTaskConfiguration(
  defaultTasks: WorkspaceDefaultsConfiguration['tasks']
): (
  projectTasks: ProjectTaskConfigurationsJson
) => (taskName: TaskName) => ExecutorReferenceString | TaskConfiguration | undefined {
  const toDefaultExecutorReferenceString = taskNameToDefaultExecutorReferenceString(defaultTasks);
  return projectTasks => {
    const tasks = projectTaskConfigurationsJsonToRecord(projectTasks);
    return taskName => {
      const taskNameOrExecutorReferenceOrConfiguration = tasks[taskName];
      if (taskNameOrExecutorReferenceOrConfiguration === undefined) {
        return undefined;
      }

      if (isString(taskNameOrExecutorReferenceOrConfiguration)) {
        const taskNameOrExecutorReferenceString = taskNameOrExecutorReferenceOrConfiguration;
        return isExecutorReferenceString(taskNameOrExecutorReferenceString)
          ? taskNameOrExecutorReferenceString
          : toDefaultExecutorReferenceString(taskName);
      } else {
        return taskConfigurationJsonToTaskConfiguration(taskName)(taskNameOrExecutorReferenceOrConfiguration);
      }
    };
  };
}
