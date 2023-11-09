import { type ChildProcessOutput } from './child-process-output';

/**
 * Returns the standard error text, given a child process output
 *
 * @param childProcessOutput Child process output
 * @returns Standard error text
 */
export function childProcessOutputToStderr(childProcessOutput: ChildProcessOutput): string {
  return childProcessOutput.stderr;
}
