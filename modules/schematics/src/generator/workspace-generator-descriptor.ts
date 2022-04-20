/**
 * Workspace generator descriptor
 */
export interface WorkspaceGeneratorDescriptor {
  /**
   * Description
   */
  readonly description: string;
  /**
   * Entry-point
   */
  readonly main: string;
  /**
   * Name
   */
  readonly name: string;
  /**
   * Package
   */
  readonly package: {
    /**
     * Package name
     */
    readonly name: string;
    /**
     * Package path
     */
    readonly path: string;
  };
}
