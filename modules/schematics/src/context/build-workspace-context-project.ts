import { objectToEntries } from '@komore/functional';
import { cache, defaultIfEmpty, forkJoin, map, take, type Observable } from '@komore/reactive';
import { join } from 'path';
import { loadProjectConfiguration } from '../project/load-project-configuration';
import { type ProjectConfiguration } from '../project/project-configuration';
import { type ProjectName } from '../project/project-name';
import { type WorkspaceConfiguration } from '../workspace/workspace-configuration';
import { type WorkspaceContext } from './workspace-context';

/**
 * Builds a workspace context project
 *
 * @param workspaceConfiguration Workspace configuration
 * @param basePath Base path
 * @returns Workspace context project
 */
export function buildWorkspaceContextProject(
  workspaceConfiguration: WorkspaceConfiguration,
  basePath: string
): WorkspaceContext['project'] {
  const { projects } = workspaceConfiguration;
  const entries = objectToEntries(projects)
    .map(projectEntryToProjectEntryWithConfigurationPath(basePath))
    .map(projectEntryWithConfigurationPathToProjectEntryWithObservableConfiguration);
  const byName = new Map(entries);
  const list = forkJoin(entries.map(projectEntryWithObservableConfigurationToProjectEntryWithConfiguration)).pipe(
    defaultIfEmpty([])
  );

  return {
    byName,
    list,
  };
}

/**
 * Creates a function that returns a project entry with a configuration path, given a project entry
 *
 * @param basePath Base path
 * @returns Function that returns a project entry with a configuration path, given a project entry
 */
function projectEntryToProjectEntryWithConfigurationPath(
  basePath: string
): (entry: ProjectEntry) => ProjectEntryWithConfigurationPath {
  return ([projectName, projectPath]) => {
    const configurationPath = join(basePath, projectPath, `${projectName}.project.json`);
    return [projectName, projectPath, configurationPath];
  };
}

/**
 * Returns a project entry with an observable configuration, given a project entry with a configuration path
 *
 * @param entry Project entry with a configuration path
 * @returns Project entry with an observable configuration
 */
function projectEntryWithConfigurationPathToProjectEntryWithObservableConfiguration(
  entry: ProjectEntryWithConfigurationPath
): ProjectEntryWithObservableConfiguration {
  const [projectName, projectPath, configurationPath] = entry;
  const projectConfiguration = loadProjectConfiguration(projectName, projectPath, configurationPath).pipe(cache());
  return [projectName, projectConfiguration];
}

/**
 * Returns a project entry with a configuration, given a project entry with an observable configuration
 *
 * @param entry Project entry with an observable configuration
 * @returns Project entry with a configuration
 */
function projectEntryWithObservableConfigurationToProjectEntryWithConfiguration(
  entry: ProjectEntryWithObservableConfiguration
): Observable<ProjectEntryWithConfiguration> {
  const [projectName, projectConfiguration$] = entry;
  return projectConfiguration$.pipe(
    take(1),
    map(projectConfiguration => [projectName, projectConfiguration] as const)
  );
}

type ProjectEntry = readonly [projectName: ProjectName, projectPath: string];
type ProjectEntryWithConfigurationPath = readonly [
  projectName: ProjectName,
  projectPath: string,
  projectConfigurationPath: string
];
type ProjectEntryWithObservableConfiguration = readonly [
  projectName: ProjectName,
  projectConfiguration: Observable<ProjectConfiguration>
];
type ProjectEntryWithConfiguration = readonly [projectName: ProjectName, projectConfiguration: ProjectConfiguration];
