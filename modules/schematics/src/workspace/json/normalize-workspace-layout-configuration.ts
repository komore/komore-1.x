import { type WorkspaceLayoutConfiguration } from '../workspace-layout-configuration';
import { type WorkspaceLayoutConfigurationJson } from './workspace-layout-configuration-json';

/**
 * Normalizes a workspace's layout configuration
 *
 * @param layout Layout configuration
 * @returns Normalized workspace layout configuration
 */
export function normalizeWorkspaceLayoutConfiguration(
  layout: WorkspaceLayoutConfigurationJson | undefined
): WorkspaceLayoutConfiguration {
  const applications = layout?.applications ?? 'applications';
  const libraries = layout?.libraries ?? 'libraries';
  const stacks = layout?.stacks ?? 'stacks';
  return {
    applications,
    libraries,
    stacks,
  };
}
