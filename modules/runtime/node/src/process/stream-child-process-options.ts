/**
 * Stream child process options
 */
export interface StreamChildProcessOptions {
  readonly args: ReadonlyArray<string>;
  readonly cwd: string;
}
