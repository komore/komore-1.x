import { type WorkspaceConfiguration } from '../workspace-configuration';
import { type JsonWorkspaceConfiguration } from './json-workspace-configuration';

/**
 * Normalizes a workspace's layout configuration
 *
 * @param layout Layout configuration
 * @returns Normalized workspace layout configuration
 */
export function normalizeWorkspaceLayoutConfiguration(
  layout: JsonWorkspaceConfiguration['layout']
): WorkspaceConfiguration['layout'] {
  return {
    ...layout,
    applications: layout?.applications ?? 'applications',
    libraries: layout?.libraries ?? 'libraries',
    stacks: layout?.stacks ?? 'stacks',
  };
}
