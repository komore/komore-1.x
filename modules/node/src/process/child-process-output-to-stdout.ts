import { type ChildProcessOutput } from './child-process-output';

/**
 * Returns the standard output text, given a child process output
 *
 * @param childProcessOutput Child process output
 * @returns Standard output text
 */
export function childProcessOutputToStdout(childProcessOutput: ChildProcessOutput): string {
  return childProcessOutput.stdout;
}
