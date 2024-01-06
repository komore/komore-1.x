import { isArray } from '@komore/collection';
import { isString } from '@komore/string';
import { type ReadonlyRecord } from '@komore/typescript';

import { type ProjectTaskConfigurationsJson } from '../../project/json/project-task-configurations-json';
import { type TaskConfigurationJson } from '../json/task-configuration-json';
import { type TaskConfigurationJsonEntry } from '../json/task-configuration-json-entry';

export function projectTaskConfigurationsJsonToRecord(
  projectTasks: ProjectTaskConfigurationsJson
): ReadonlyRecord<string, string | TaskConfigurationJson> {
  return isArray(projectTasks)
    ? projectTasks.map(projectTaskToNormalizedTaskConfigurationJsonEntry).reduce(
        (acc, [taskName, nameOrTaskConfiguration]) => ({
          ...acc,
          [taskName]: nameOrTaskConfiguration,
        }),
        {} as ReadonlyRecord<string, string | TaskConfigurationJson>
      )
    : projectTasks;
}

function projectTaskToNormalizedTaskConfigurationJsonEntry(
  projectTask: string | TaskConfigurationJsonEntry
): TaskConfigurationJsonEntry {
  return isString(projectTask) ? [projectTask, projectTask] : projectTask;
}
