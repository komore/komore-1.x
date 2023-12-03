import { mapObjectKeys, mapObjectValues } from '@komore/functional';
import { map, type Observable } from '@komore/reactive';

import { type ProjectName } from '../../../project/name/project-name';
import { taskConfigurationJsonToTaskConfiguration } from '../../../task/json/task-configuration-json-to-task-configuration';
import { type TaskConfigurationJson } from '../../../task/json/task-configuration-json';
import { type TaskConfiguration } from '../../../task/task-configuration';
import { validateTaskName } from '../../../task/name/validate-task-name';
import { validateProjectName } from '../../../project/name/validate-project-name';
import { type WorkspaceConfiguration } from '../../workspace-configuration';
import { type WorkspaceConfigurationJson } from '../workspace-configuration-json';
import { workspaceConfigurationJson100SchemaVersionString } from '../workspace-configuration-json-schema-version-string';
import { workspaceDefaultsConfigurationJsonToWorkspaceDefaultsConfiguration } from './workspace-defaults-configuration-json-to-workspace-defaults-configuration';
import { workspaceLayoutConfigurationJsonToWorkspaceLayoutConfiguration } from './workspace-layout-configuration-json-to-workspace-layout-configuration';
import { workspacePackageConfigurationJsonToWorkspacePackageConfiguration } from './workspace-package-configuration-json-to-workspace-package-configuration';
import { workspaceTaskConfigurationJsonToWorkspaceTaskConfiguration } from './workspace-task-configuration-json-to-workspace-task-configuration';

/**
 * Creates a function that returns a workspace configuration, given a JSON workspace configuration
 *
 * @param basePath Base path
 * @returns Function that returns a workspace configuration, given a JSON workspace configuration
 */
export function workspaceConfigurationJsonToWorkspaceConfiguration(
  basePath: string
): (workspaceConfigurationJson: WorkspaceConfigurationJson) => Observable<WorkspaceConfiguration> {
  const toWorkspacePackageConfiguration = workspacePackageConfigurationJsonToWorkspacePackageConfiguration(basePath);
  return json => {
    const { schematics = {} } = json;
    const projects = mapObjectKeys(asValidProjectName)(json.projects ?? {});
    const defaults = workspaceDefaultsConfigurationJsonToWorkspaceDefaultsConfiguration(json.defaults, projects);
    const layout = workspaceLayoutConfigurationJsonToWorkspaceLayoutConfiguration(json.layout ?? {});
    const task = workspaceTaskConfigurationJsonToWorkspaceTaskConfiguration(json.task ?? {});
    const tasks = mapObjectValues(taskToTask)(json.tasks ?? {});
    const version = json.version ?? workspaceConfigurationJson100SchemaVersionString;
    return toWorkspacePackageConfiguration(json.package ?? {}).pipe(
      map(workspacePackageConfiguration => ({
        defaults,
        layout,
        package: workspacePackageConfiguration,
        projects,
        schematics,
        task,
        tasks,
        version,
      }))
    );
  };
}

function asValidProjectName(projectName: string, _path: string): ProjectName {
  validateProjectName(projectName);
  return projectName;
}

function taskToTask(taskConfiguration: TaskConfigurationJson, taskName: string): TaskConfiguration {
  validateTaskName(taskName);
  return taskConfigurationJsonToTaskConfiguration(taskName)(taskConfiguration);
}
