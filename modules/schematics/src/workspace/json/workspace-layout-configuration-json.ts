/**
 * Workspace layout configuration JSON
 */
export interface WorkspaceLayoutConfigurationJson {
  /**
   * Base path for applications
   */
  readonly applications?: string;
  /**
   * Base path for libraries
   */
  readonly libraries?: string;
  /**
   * Base path for stacks
   */
  readonly stacks?: string;
}
