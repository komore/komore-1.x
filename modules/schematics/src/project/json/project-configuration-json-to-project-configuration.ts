import { isArray } from '@komore/collection';
import { entriesToObject, objectToEntries } from '@komore/functional';
import { type ReadonlyRecord } from '@komore/typescript';

import { type TaskConfigurationJson } from '../../task/json/task-configuration-json';
import { taskConfigurationJsonEntryToTaskConfigurationEntry } from '../../task/json/task-configuration-json-entry-to-task-configuration-entry';
import { type TaskConfiguration } from '../../task/task-configuration';
import { type ProjectName } from '../name/project-name';
import { type ProjectConfiguration } from '../project-configuration';
import { type ProjectType } from '../project-type';
import { type ProjectConfigurationJson } from './project-configuration-json';
import { type ProjectTaskConfigurationsJson } from './project-task-configurations-json';

/**
 * Creates a function that returns a project configuration, given a project configuration JSON
 *
 * @param projectPath Project path
 * @returns Function that returns a project configuration, given a project configuration JSON
 */
export function projectConfigurationJsonToProjectConfiguration(
  projectName: ProjectName,
  projectPath: string
): (projectConfigurationJson: ProjectConfigurationJson) => ProjectConfiguration {
  return ({ domain, tags = [], tasks = {}, type }) => {
    if (domain === undefined) {
      throw new Error('TODO: no domain specified');
    }

    if (type === undefined) {
      throw new Error('TODO: no project type specified');
    }

    // TODO: validate project type

    return {
      domain,
      name: projectName,
      path: projectPath,
      tags,
      tasks: normalizeProjectTaskConfigurations(projectName, tasks),
      type: type as ProjectType,
    };
  };
}

/**
 * Normalizes a project's task configurations
 *
 * @param projectName Project name
 * @param taskConfigurations Task configurations
 * @returns Normalized project task configurations
 */
function normalizeProjectTaskConfigurations(
  projectName: ProjectName,
  taskConfigurations: ProjectTaskConfigurationsJson
): ReadonlyRecord<string, TaskConfiguration> {
  // TODO: own .ts
  const entries = (
    isArray(taskConfigurations)
      ? taskConfigurations.map(taskNameOrEntry =>
          typeof taskNameOrEntry === 'string' ? ([taskNameOrEntry, undefined] as const) : taskNameOrEntry
        )
      : objectToEntries(taskConfigurations)
  ) as ReadonlyArray<readonly [name: string, referenceOrConfiguration: string | TaskConfigurationJson]>;
  const normalizedEntries = entries.map(taskConfigurationJsonEntryToTaskConfigurationEntry(projectName));
  return entriesToObject(normalizedEntries);
}
