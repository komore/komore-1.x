import { entriesToObject, objectToEntries, objectToKeys } from '@komore/functional';
import { map, type Observable } from '@komore/reactive';

import { taskConfigurationJsonEntryToTaskConfigurationEntry } from '../../task/json/task-configuration-json-entry-to-task-configuration-entry';
import { type WorkspaceConfiguration } from '../workspace-configuration';
import { normalizeWorkspaceDefaultsConfiguration } from './normalize-workspace-defaults-configuration';
import { normalizeWorkspaceLayoutConfiguration } from './normalize-workspace-layout-configuration';
import { normalizeWorkspacePackageConfiguration } from './normalize-workspace-package-configuration';
import { normalizeWorkspaceTaskConfiguration } from './normalize-workspace-task-configuration';
import { type WorkspaceConfigurationJson } from './workspace-configuration-json';
import { workspaceConfigurationJson100SchemaVersionString } from './workspace-configuration-json-schema-version-string';

/**
 * Creates a function that returns a workspace configuration, given a JSON workspace configuration
 *
 * @param basePath Base path
 * @returns Function that returns a workspace configuration, given a JSON workspace configuration
 */
export function workspaceConfigurationJsonToWorkspaceConfiguration(
  basePath: string
): (workspaceConfigurationJson: WorkspaceConfigurationJson) => Observable<WorkspaceConfiguration> {
  return workspaceConfigurationJson => {
    const {
      defaults = {},
      layout = {},
      projects = {},
      schematics = {},
      task = {},
      tasks = {},
      version = workspaceConfigurationJson100SchemaVersionString,
    } = workspaceConfigurationJson;
    const package$ = normalizeWorkspacePackageConfiguration(workspaceConfigurationJson.package, basePath);
    return package$.pipe(
      map(packageConfiguration => ({
        defaults: normalizeWorkspaceDefaultsConfiguration(defaults, objectToKeys(projects)[0]),
        layout: normalizeWorkspaceLayoutConfiguration(layout),
        package: packageConfiguration,
        projects,
        schematics,
        task: normalizeWorkspaceTaskConfiguration(task),
        tasks: entriesToObject(
          objectToEntries(tasks).map(taskConfigurationJsonEntryToTaskConfigurationEntry(undefined))
        ),
        version,
      }))
    );
  };
}
