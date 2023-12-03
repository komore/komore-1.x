import { type WorkspaceLayoutConfiguration } from '../../workspace-layout-configuration';
import { type WorkspaceLayoutConfigurationJson } from '../workspace-layout-configuration-json';

/**
 * Returns a workspace's layout configuration, given a JSON workspace layout configuration
 *
 * @param layout Layout configuration
 * @returns Workspace layout configuration
 */
export function workspaceLayoutConfigurationJsonToWorkspaceLayoutConfiguration(
  layout: WorkspaceLayoutConfigurationJson
): WorkspaceLayoutConfiguration {
  const applications = layout.applications ?? 'applications';
  const libraries = layout.libraries ?? 'libraries';
  const stacks = layout.stacks ?? 'stacks';
  return {
    applications,
    libraries,
    stacks,
  };
}
