/**
 * Build module options
 */
export interface BuildModuleOptions {
  /**
   * Paths
   */
  readonly paths: {
    /**
     * Path to the entry-point
     */
    readonly entryPoint: string;
    /**
     * Path where the output should be written
     */
    readonly output: string;
    /**
     * Path to the TypeScript configuration file
     */
    readonly tsConfig: string;
  };
}
