import { type WorkspaceTaskConfigurationOptionsJson } from './workspace-task-configuration-options-json';

/**
 * Workspace task configuration JSON
 */
export interface WorkspaceTaskConfigurationJson {
  /**
   * Options
   */
  readonly options?: WorkspaceTaskConfigurationOptionsJson;
  /**
   * Task runner
   */
  readonly runner?: string;
}
