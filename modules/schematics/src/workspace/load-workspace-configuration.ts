import { entriesToObject, jsonToObject, objectToKeys } from '@komore/functional';
import { defaultIfEmpty, forkJoin, map, mergeMap, type Observable } from '@komore/reactive';
import { readFileContent } from '@komore/runtime/node';
import { type WorkspaceJsonConfiguration } from '@nrwl/devkit';
import { dirname } from 'path';
import { projectNameToProjectConfiguration } from '../project/project-name-to-project-configuration';
import { type RawWorkspaceJsonConfiguration } from './raw-workspace-configuration';

/**
 * Loads a workspace configuration
 * @param workspacePath Workspace path
 * @returns Workspace configuration
 */
export function loadWorkspaceConfiguration(workspacePath: string): Observable<WorkspaceJsonConfiguration> {
  const directoryName = dirname(workspacePath);
  console.log('workspace path', workspacePath);
  console.log('dir name', directoryName);
  return readFileContent(workspacePath, 'utf-8').pipe(
    map(jsonToObject<RawWorkspaceJsonConfiguration>()),
    mergeMap(rawWorkspaceConfiguration => {
      const toProjectConfiguration = projectNameToProjectConfiguration(rawWorkspaceConfiguration, directoryName);
      return forkJoin(
        objectToKeys(rawWorkspaceConfiguration.projects).map(projectName =>
          toProjectConfiguration(projectName).pipe(
            map(projectConfiguration => [projectName, projectConfiguration] as const)
          )
        )
      ).pipe(
        defaultIfEmpty([]),
        map(entriesToObject),
        map(projects => ({
          ...rawWorkspaceConfiguration,
          projects,
        }))
      );
    })
  );
}
