import { join } from 'node:path';

import { objectToKeys } from '@komore/functional';
import { cache, defaultIfEmpty, defer, first, forkJoin, map, ObservableMap } from '@komore/reactive';
import { type ReadonlyRecord } from '@komore/typescript';

import { loadProjectConfiguration } from '../project/load-project-configuration';
import { type ProjectName } from '../project/name/project-name';
import { type ProjectConfiguration } from '../project/project-configuration';
import { schematicsError } from '../schematics.error';
import { type WorkspaceConfiguration } from '../workspace/workspace-configuration';
import { type WorkspaceContext } from './workspace-context';

/**
 * Creates a function that builds a workspace context's project, given a workspace configuration
 *
 * @param basePath Base path
 * @param workspaceConfiguration Workspace configuration
 * @returns Function that builds a workspace context project, given a workspace configuration
 */
export function workspaceConfigurationToWorkspaceContextProject(
  basePath: string
): (
  workspaceConfiguration: WorkspaceConfiguration,
  workspaceContextResolver: () => WorkspaceContext
) => WorkspaceContext['project'] {
  return ({ projects }, contextResolver) => {
    const toProjectConfiguration = projectNameToResolvedProjectConfiguration(basePath, contextResolver, projects);
    const byName = new ObservableMap<ProjectName, ProjectConfiguration>(toProjectConfiguration);
    return {
      byName,
      list: defer(() => {
        const projectNames = objectToKeys(projects);
        const resolvedProjects = projectNames.map(projectNameToResolvedProjectConfigurationEntry(byName));
        return forkJoin(resolvedProjects).pipe(defaultIfEmpty([]));
      }),
    };
  };
}

function projectNameToResolvedProjectConfiguration(
  basePath: string,
  workspaceContextResolver: () => WorkspaceContext,
  projectPaths: ReadonlyRecord<ProjectName, string>
): (projectName: ProjectName) => Observable<ProjectConfiguration> {
  return projectName => {
    const workspaceContext = workspaceContextResolver();
    const loadConfiguration = loadProjectConfiguration(workspaceContext);
    const projectPath = projectPaths[projectName];
    if (projectPath === undefined) {
      throw schematicsError.projectNotFound({ projectName });
    }

    const projectConfigurationPath = join(basePath, projectPath, `${projectName}.project.json`);

    return loadConfiguration({ projectConfigurationPath, projectName, projectPath }).pipe(cache());
  };
}

function projectNameToResolvedProjectConfigurationEntry(
  byName: ObservableMap<ProjectName, ProjectConfiguration>
): (
  projectName: ProjectName
) => Observable<readonly [projectName: ProjectName, projectConfiguration: ProjectConfiguration]> {
  return projectName =>
    byName.get(projectName).pipe(
      first(),
      map(projectConfiguration => [projectName, projectConfiguration] as const)
    );
}
