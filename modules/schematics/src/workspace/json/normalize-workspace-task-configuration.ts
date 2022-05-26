import { type PackageReferenceName } from '../../package/package-reference-name';
import { type WorkspaceConfiguration } from '../workspace-configuration';
import { type JsonWorkspaceConfiguration } from './json-workspace-configuration';

/**
 * Normalizes a workspace taask configuration
 *
 * @param task JSON workspace task configuration
 * @returns Workspace task configuration
 */
export function normalizeWorkspaceTaskConfiguration(
  task: JsonWorkspaceConfiguration['task']
): WorkspaceConfiguration['task'] {
  return {
    runner: '@komore/schematics/runner#createTaskRunner' as PackageReferenceName,
    ...task,
  };
}
