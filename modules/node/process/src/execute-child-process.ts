import { exec, type ExecOptions } from 'node:child_process';

import { type ChildProcessOutput } from './child-process-output';
import { type ExecuteChildProcessOptions } from './execute-child-process-options';
import { nodeProcessError } from './node-process.error';

/**
 * Executes a child process
 *
 * @param command Command
 * @param options Execution options
 * @returns Observable that emits the outputs from the child process
 */
export function executeChildProcess(
  command: string,
  options?: ExecuteChildProcessOptions
): Observable<ChildProcessOutput> {
  const cwd = options?.workingDirectory;
  const encoding = 'utf-8';
  const execOptions: ExecOptions = {
    ...(cwd !== undefined ? { cwd } : {}),
  };
  return new Observable<ChildProcessOutput>(subscriber => {
    const childProcess = exec(command, { encoding, ...execOptions }, (exception, stdout, stderr) => {
      if (exception !== null) {
        const error = nodeProcessError.executionError({ exception, stderr, stdout });
        subscriber.error(error);
      } else {
        subscriber.next({ stdout, stderr });
      }

      subscriber.complete();
    });

    return () => childProcess.kill(); // TODO: allow overriding the signal via options (via abort ctrl or pass an observable process killer?)
  });
}
