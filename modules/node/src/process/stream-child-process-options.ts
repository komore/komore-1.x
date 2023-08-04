/**
 * Stream child process options
 */
export interface StreamChildProcessOptions {
  /**
   * Arguments
   */
  readonly arguments: ReadonlyArray<string>;
  /**
   * Current working directory
   */
  readonly cwd: string;
}
