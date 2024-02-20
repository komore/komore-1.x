/**
 * Execute child process options
 */
export interface ExecuteChildProcessOptions {
  /**
   * Arguments
   */
  readonly arguments: ReadonlyArray<string>;
  /**
   * Working directory
   */
  readonly workingDirectory: string;
}
