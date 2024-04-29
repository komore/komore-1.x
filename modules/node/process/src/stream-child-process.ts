import { spawn } from 'node:child_process';

import { type StreamChildProcessOptions } from './stream-child-process-options';

/**
 * Streams a child process
 *
 * @param command Command
 * @param options Stream options
 * @returns Observable that emits a stream of stdout data
 */
export function streamChildProcess(command: string, options?: Partial<StreamChildProcessOptions>): Observable<string> {
  return new Observable<string>(subscriber => {
    const { arguments: args = [], workingDirectory: cwd } = options ?? {};
    const childProcess = spawn(command, args, { cwd });

    // TODO: avoid toString by default?
    childProcess.stdout.on('data', chunk => subscriber.next(chunk.toString()));

    childProcess.stderr.on('data', chunk => {
      // TODO: how to expose stderr? overloads?
      console.log('on(stderr data)', chunk.toString());
    });

    childProcess.on('error', error => subscriber.error(error));

    childProcess.on('close', _exitCode => {
      // TODO: how to expose exit code?
      subscriber.complete();
    });
  });
}
