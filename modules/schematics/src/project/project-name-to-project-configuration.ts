import { entriesToObject, jsonToObject, objectToEntries } from '@komore/functional';
import { map, throwError, type Observable } from '@komore/reactive';
import { readFileContent } from '@komore/runtime/node';
import { type ReadonlyRecord } from '@komore/typescript';
import { join } from 'path';
import { type ProjectTaskConfiguration } from '../task/project-task-configuration';
import { type WorkspaceConfiguration } from '../workspace/workspace-configuration';
import { type ProjectConfiguration } from './project-configuration';

/**
 * Creates a function that returns a project configuration from a workspace configuration, given a project name
 *
 * @param workspaceConfiguration Workspace configuration
 * @param relativeTo Relative path from which to load project configurations
 * @returns Function that returns a project configuration from the workspace configuration, given a project name
 */
export function projectNameToProjectConfiguration(
  workspaceConfiguration: WorkspaceConfiguration,
  relativeTo: string
): (projectName: string) => Observable<ProjectConfiguration> {
  return projectName => {
    const projectConfiguration = workspaceConfiguration.projects[projectName];
    if (projectConfiguration === undefined) {
      return throwError(() => new Error(`project ${projectName} not found in the workspace`));
    }

    const projectConfigurationPath = join(relativeTo, projectConfiguration, `${projectName}.project.json`); // TODO: project.json
    return readFileContent(projectConfigurationPath, 'utf-8').pipe(
      map(jsonToObject<Partial<ProjectConfigurationWithSimpleTasks>>()),
      map(projectConfigurationWithSimpleTasksToProjectConfiguration)
    );
  };
}

function projectConfigurationWithSimpleTasksToProjectConfiguration(
  projectConfiguration: Partial<ProjectConfigurationWithSimpleTasks>
): ProjectConfiguration {
  const { domain, type, tags = [], tasks = {} } = projectConfiguration;
  if (domain === undefined) {
    throw new Error('TODO: no domain specified');
  }

  if (type === undefined) {
    throw new Error('TODO: no project type specified');
  }

  return {
    ...projectConfiguration,
    domain,
    tags,
    tasks: normalizeProjectTaskConfigurations(tasks),
    type,
  };
}

function normalizeProjectTaskConfigurations(
  taskConfigurations: ReadonlyRecord<string, ProjectTaskConfiguration | string>
): ReadonlyRecord<string, ProjectTaskConfiguration> {
  const entries = objectToEntries(taskConfigurations);
  const normalizedEntries = entries.map(toNormalizedProjectTaskConfigurationEntry);
  return entriesToObject(normalizedEntries);
}

function toNormalizedProjectTaskConfigurationEntry([name, configuration]: readonly [
  name: string,
  configuration: ProjectTaskConfiguration | string
]): readonly [name: string, configuration: ProjectTaskConfiguration] {
  const normalizedConfiguration =
    typeof configuration === 'string'
      ? {
          executor: configuration,
        }
      : configuration;

  return [name, normalizedConfiguration];
}

type ProjectConfigurationWithSimpleTasks = Omit<ProjectConfiguration, 'tasks'> & {
  readonly tasks?: ReadonlyRecord<string, ProjectTaskConfiguration | string>;
};
