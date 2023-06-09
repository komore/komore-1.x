/**
 * Build flags
 */
export interface BuildFlags {
  /**
   * Only runs tests for files that have changed based on the repository history
   */
   readonly affected?: boolean;
   /**
    * Displays additional information
    */
   readonly verbose?: boolean;
   /**
    * Watches files for changes and re-runs the build related to changed files
    */
   readonly watch?: boolean;
   /**
    * Watches files for changes and re-runs the build when changes occur
    */
   readonly watchAll?: boolean;
}
