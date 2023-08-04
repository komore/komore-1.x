import { type ProjectName } from '../../project/name/project-name';
import { validateProjectName } from '../../project/name/validate-project-name';
import { type WorkspaceDefaultsConfiguration } from '../workspace-defaults-configuration';
import { type WorkspaceDefaultsConfigurationJson } from './workspace-defaults-configuration-json';

/**
 * Normalizes a workspace's defaults configuration
 *
 * @param defaults Defaults configuration
 * @param defaultProjectName Default project name
 * @returns Normalized defaults configuration
 */
export function normalizeWorkspaceDefaultsConfiguration(
  defaults: WorkspaceDefaultsConfigurationJson | undefined,
  defaultProjectName: ProjectName | undefined
): WorkspaceDefaultsConfiguration {
  const outputPath = defaults?.outputPath ?? 'build';
  const project = defaults?.project ?? defaultProjectName;
  const tasks = defaults?.tasks ?? [];

  tasks; // TODO

  if (project !== undefined) {
    validateProjectName(project);
  }

  return {
    outputPath,
    project,
    tasks: {},
  };
}
