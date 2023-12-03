import { type PackageReferenceName } from '../package/reference/package-reference-name';
import { type WorkspaceTaskConfigurationOptions } from './workspace-task-configuration-options';

/**
 * Workspace task configuration
 */
export interface WorkspaceTaskConfiguration {
  /**
   * Options
   */
  readonly options: WorkspaceTaskConfigurationOptions;
  /**
   * Task runner
   */
  readonly runner: PackageReferenceName;
}
