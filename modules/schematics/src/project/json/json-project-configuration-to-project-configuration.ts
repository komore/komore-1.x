import { isArray } from '@komore/array';
import { entriesToObject, objectToEntries } from '@komore/functional';
import { type ReadonlyRecord } from '@komore/typescript';
import { jsonTaskConfigurationEntryToTaskConfigurationEntry } from '../../task/json/json-task-configuration-entry-to-task-configuration-entry';
import { type TaskConfiguration } from '../../task/task-configuration';
import { type ProjectConfiguration } from '../project-configuration';
import { type ProjectName } from '../project-name';
import { type JsonProjectConfiguration } from './json-project-configuration';
import { type JsonProjectTaskConfigurations } from './json-project-task-configurations';

/**
 * Creates a function that returns a project configuration, given a JSON project configuration
 *
 * @param projectPath Project path
 * @returns Function that returns a project configuration, given a JSON project configuration
 */
export function jsonProjectConfigurationToProjectConfiguration(
  projectName: ProjectName,
  projectPath: string
): (jsonProjectConfiguration: JsonProjectConfiguration) => ProjectConfiguration {
  return ({ domain, tags = [], tasks = {}, type }) => {
    if (domain === undefined) {
      throw new Error('TODO: no domain specified');
    }

    if (type === undefined) {
      throw new Error('TODO: no project type specified');
    }

    return {
      domain,
      name: projectName,
      path: projectPath,
      tags,
      tasks: normalizeProjectTaskConfigurations(projectName, tasks),
      type,
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
  taskConfigurations: JsonProjectTaskConfigurations
): ReadonlyRecord<string, TaskConfiguration> {
  const entries = isArray(taskConfigurations) ? taskConfigurations.map(taskNameOrEntry => typeof taskNameOrEntry === 'string' ? [taskNameOrEntry, undefined] as const : taskNameOrEntry) : objectToEntries(taskConfigurations);
  const normalizedEntries = entries.map(jsonTaskConfigurationEntryToTaskConfigurationEntry(projectName));
  return entriesToObject(normalizedEntries);
}
