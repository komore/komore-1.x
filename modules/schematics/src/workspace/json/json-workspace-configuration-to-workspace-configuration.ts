import { entriesToObject, objectToEntries, objectToKeys } from '@komore/functional';
import { map, type Observable } from '@komore/reactive';
import { jsonTaskConfigurationEntryToTaskConfigurationEntry } from '../../task/json/json-task-configuration-entry-to-task-configuration-entry';
import { type WorkspaceConfiguration } from '../workspace-configuration';
import { type JsonWorkspaceConfiguration } from './json-workspace-configuration';
import { normalizeWorkspaceDefaultsConfiguration } from './normalize-workspace-defaults-configuration';
import { normalizeWorkspaceLayoutConfiguration } from './normalize-workspace-layout-configuration';
import { normalizeWorkspacePackageConfiguration } from './normalize-workspace-package-configuration';
import { normalizeWorkspaceTaskConfiguration } from './normalize-workspace-task-configuration';

/**
 * Creates a function that returns a workspace configuration, given a JSON workspace configuration
 *
 * @param basePath Base path
 * @returns Function that returns a workspace configuration, given a JSON workspace configuration
 */
export function jsonWorkspaceConfigurationToWorkspaceConfiguration(
  basePath: string
): (jsonWorkspaceConfiguration: JsonWorkspaceConfiguration) => Observable<WorkspaceConfiguration> {
  return jsonWorkspaceConfiguration => {
    const { defaults, layout, projects = {}, schematics = {}, task, tasks = {}, version } = jsonWorkspaceConfiguration;
    const package$ = normalizeWorkspacePackageConfiguration(jsonWorkspaceConfiguration.package, basePath);
    return package$.pipe(
      map(packageConfiguration => ({
        defaults: normalizeWorkspaceDefaultsConfiguration(defaults, objectToKeys(projects)[0]),
        layout: normalizeWorkspaceLayoutConfiguration(layout),
        package: packageConfiguration,
        projects,
        schematics,
        task: normalizeWorkspaceTaskConfiguration(task),
        tasks: entriesToObject(
          objectToEntries(tasks).map(jsonTaskConfigurationEntryToTaskConfigurationEntry(undefined))
        ),
        version,
      }))
    );
  };
}
