/**
 * Git CLI client options
 */
export interface GitCliClientOptions {
  /**
   * Command name to execute
   *
   * @note Defaults to `"git"`
   */
  readonly commandName?: string;
  /**
   * Working directory
   *
   * @note Defaults to the process' current working directory
   */
  readonly workingDirectory: string;
}
