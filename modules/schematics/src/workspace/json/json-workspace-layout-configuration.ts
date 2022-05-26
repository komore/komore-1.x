/**
 * JSON workspace layout configuration
 */
export interface JsonWorkspaceLayoutConfiguration {
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
