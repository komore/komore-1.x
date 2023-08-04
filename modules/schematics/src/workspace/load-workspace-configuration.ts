import { mergeMap, type Observable } from '@komore/reactive';

import { loadWorkspaceConfigurationJson } from './json/load-workspace-configuration-json';
import { workspaceConfigurationJsonToWorkspaceConfiguration } from './json/workspace-configuration-json-to-workspace-configuration';
import { type WorkspaceConfiguration } from './workspace-configuration';

/**
 * Loads a workspace configuration
 *
 * @param workspacePath Workspace path
 * @returns Workspace configuration
 */
export function loadWorkspaceConfiguration(workspacePath: string): Observable<WorkspaceConfiguration> {
  return loadWorkspaceConfigurationJson(workspacePath).pipe(
    mergeMap(workspaceConfigurationJsonToWorkspaceConfiguration(workspacePath))
  );
}
