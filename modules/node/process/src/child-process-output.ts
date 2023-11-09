/**
 * Child process output
 */
export interface ChildProcessOutput {
  /**
   * Standard error
   */
  readonly stderr: string;
  /**
   * Standard output
   */
  readonly stdout: string;
}
