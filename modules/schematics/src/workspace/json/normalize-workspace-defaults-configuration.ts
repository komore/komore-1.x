import { type ProjectName } from '../../project/project-name';
import { type WorkspaceConfiguration } from '../workspace-configuration';
import { type JsonWorkspaceConfiguration } from './json-workspace-configuration';

/**
 * Normalizes a workspace's defaults configuration
 *
 * @param defaults Defaults configuration
 * @param defaultProjectName Default project name
 * @returns Normalized defaults configuration
 */
export function normalizeWorkspaceDefaultsConfiguration(
  defaults: JsonWorkspaceConfiguration['defaults'],
  defaultProjectName: ProjectName | undefined
): WorkspaceConfiguration['defaults'] {
  return {
    ...defaults,
    outputPath: defaults?.outputPath ?? 'build',
    project: defaults?.project ?? defaultProjectName,
  };
}
