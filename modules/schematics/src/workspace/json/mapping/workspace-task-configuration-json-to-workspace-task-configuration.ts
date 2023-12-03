import { validatePackageReferenceName } from '../../../package/reference/validate-package-reference-name';
import { type WorkspaceTaskConfiguration } from '../../workspace-task-configuration';
import { type WorkspaceTaskConfigurationJson } from '../workspace-task-configuration-json';
import { workspaceTaskConfigurationOptionsJsonToWorkspaceTaskConfigurationOptions } from './workspace-task-configuration-options-json-to-workspace-task-configuration-options';

/**
 * Returns a workspace's task configuration, given a JSON workspace task configuration
 *
 * @param task JSON workspace task configuration
 * @returns Workspace task configuration
 */
export function workspaceTaskConfigurationJsonToWorkspaceTaskConfiguration(
  taskConfiguration: WorkspaceTaskConfigurationJson
): WorkspaceTaskConfiguration {
  const optionsJson = taskConfiguration.options ?? {};
  const options = workspaceTaskConfigurationOptionsJsonToWorkspaceTaskConfigurationOptions(optionsJson);
  const runner = taskConfiguration.runner ?? '@komore/schematics/runner#createTaskRunner';

  validatePackageReferenceName(runner);

  return {
    options,
    runner,
  };
}
