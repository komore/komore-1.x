import { type WorkspaceTaskConfigurationOptions } from '../../workspace-task-configuration-options';
import { type WorkspaceTaskConfigurationOptionsJson } from '../workspace-task-configuration-options-json';

/**
 * Returns a workspace's task configuration options, given JSON workspace task configuration options
 *
 * @param taskConfigurationOptions Task configuration options
 * @returns Workspace task configuration options
 */
export function workspaceTaskConfigurationOptionsJsonToWorkspaceTaskConfigurationOptions(
  taskConfigurationOptions: WorkspaceTaskConfigurationOptionsJson
): WorkspaceTaskConfigurationOptions {
  const parallel = taskConfigurationOptions.parallel ?? 1;
  return {
    parallel,
  };
}
