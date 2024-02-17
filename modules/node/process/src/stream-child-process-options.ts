/**
 * Stream child process options
 */
export interface StreamChildProcessOptions {
  /**
   * Arguments
   */
  readonly arguments: ReadonlyArray<string>;
  /**
   * Working directory
   */
  readonly workingDirectory: string;
}
