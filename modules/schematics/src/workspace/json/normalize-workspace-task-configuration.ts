import { type PackageReferenceName } from '../../package/reference/package-reference-name';
import { validatePackageReferenceName } from '../../package/reference/validate-package-reference-name';
import { type WorkspaceTaskConfiguration } from '../workspace-task-configuration';
import { type WorkspaceTaskConfigurationJson } from './workspace-task-configuration-json';

/**
 * Normalizes a workspace taask configuration
 *
 * @param task JSON workspace task configuration
 * @returns Workspace task configuration
 */
export function normalizeWorkspaceTaskConfiguration(
  taskConfiguration: WorkspaceTaskConfigurationJson | undefined
): WorkspaceTaskConfiguration {
  const runner = taskConfiguration?.runner;
  if (runner !== undefined) {
    validatePackageReferenceName(runner);
  }

  return {
    runner: runner ?? ('@komore/schematics/runner#createTaskRunner' as PackageReferenceName),
  };
}
