import { entriesToObject, jsonToObject, objectToKeys } from '@komore/functional';
import { defaultIfEmpty, forkJoin, map, mergeMap, type Observable } from '@komore/reactive';
import { pathToDirectoryName, readFileContent } from '@komore/runtime/node';
import { projectNameToProjectConfiguration } from '../project/project-name-to-project-configuration';
import { type ResolvedWorkspaceConfiguration } from './resolved-workspace-configuration';
import { type WorkspaceConfiguration } from './workspace-configuration';
import { workspaceConfigurationToValidatedWorkspaceConfiguration } from './workspace-configuration-to-validated-workspace-configuration';

/**
 * Loads a workspace configuration
 *
 * @param workspacePath Workspace path
 * @returns Workspace configuration
 */
export function loadWorkspaceConfiguration(workspacePath: string): Observable<ResolvedWorkspaceConfiguration> {
  const directoryName = pathToDirectoryName(workspacePath);

  return readFileContent(workspacePath, 'utf-8').pipe(
    map(jsonToObject<Partial<WorkspaceConfiguration>>()),
    map(workspaceConfigurationToValidatedWorkspaceConfiguration),
    mergeMap(workspaceConfiguration => {
      const toProjectConfiguration = projectNameToProjectConfiguration(workspaceConfiguration, directoryName);
      return forkJoin(
        objectToKeys(workspaceConfiguration.projects).map(projectName =>
          toProjectConfiguration(projectName).pipe(
            map(projectConfiguration => [projectName, projectConfiguration] as const)
          )
        )
      ).pipe(
        defaultIfEmpty([]),
        map(entriesToObject),
        map(projects => ({
          ...workspaceConfiguration,
          projects,
        }))
      );
    })
  );
}
