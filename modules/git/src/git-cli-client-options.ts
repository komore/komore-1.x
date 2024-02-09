/**
 * Git CLI client options
 */
export interface GitCliClientOptions {
  /**
   * Command line to execute
   *
   * @note Defaults to `"git"`
   */
  readonly commandLine?: string;
  /**
   * Working directory
   *
   * @note Defaults to the process' current working directory
   */
  readonly workingDirectory: string;
}
