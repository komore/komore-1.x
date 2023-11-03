/**
 * Test flags
 */
export interface TestFlags {
  /**
   * Only runs tests for files that have changed based on the repository history
   */
  readonly affected?: boolean;
  /**
   * Filters based on a test name or pattern
   */
  readonly name?: string;
  /**
   * Displays additional information
   */
  readonly verbose?: boolean;
  /**
   * Watches files for changes and re-runs tests related to changed files
   */
  readonly watch?: boolean;
  /**
   * Watches files for changes and re-runs all tests when changes occur
   */
  readonly watchAll?: boolean;
}
