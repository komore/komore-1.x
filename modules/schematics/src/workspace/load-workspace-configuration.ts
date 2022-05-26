import { switchMap, type Observable } from '@komore/reactive';
import { jsonWorkspaceConfigurationToWorkspaceConfiguration } from './json/json-workspace-configuration-to-workspace-configuration';
import { loadJsonWorkspaceConfiguration } from './json/load-json-workspace-configuration';
import { type WorkspaceConfiguration } from './workspace-configuration';

/**
 * Loads a workspace configuration
 *
 * @param workspacePath Workspace path
 * @returns Workspace configuration
 */
export function loadWorkspaceConfiguration(workspacePath: string): Observable<WorkspaceConfiguration> {
  return loadJsonWorkspaceConfiguration(workspacePath).pipe(
    switchMap(jsonWorkspaceConfigurationToWorkspaceConfiguration(workspacePath))
  );
}
