import { exec, type ExecOptions } from 'child_process';

import { Observable } from '@komore/reactive';

import { type ChildProcessOutput } from './child-process-output';

/**
 * Executes a child process
 *
 * @param command Command
 * @param options Execution options
 * @returns Observable that emits the outputs from the child process
 */
export function executeChildProcess(command: string, options?: ExecOptions): Observable<ChildProcessOutput> {
  return new Observable<ChildProcessOutput>(subscriber => {
    const childProcess = exec(command, { encoding: 'utf-8', ...options }, (error, stdout, stderr) => {
      if (error !== null) {
        subscriber.error(error);
      } else {
        subscriber.next({ stdout, stderr });
      }

      subscriber.complete();
    });

    return () => childProcess.kill(); // TODO: allow overriding the signal via options (via abort ctrl or pass an observable process killer?)
  });
}
