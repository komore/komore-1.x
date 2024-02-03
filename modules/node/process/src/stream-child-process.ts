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
    const { arguments: args = [], ...remainingOptions } = options ?? {};
    console.log('args', args);
    const childProcess = spawn(command, args, remainingOptions);

    childProcess.stdout.on('data', chunk => {
      subscriber.next(chunk.toString());
    });

    childProcess.stderr.on('data', chunk => {
      console.log('on(stderr data)', chunk.toString());
    });

    childProcess.on('error', err => {
      console.log('on(error)', err);
      subscriber.error(err);
    });

    childProcess.on('close', code => {
      console.log('on(exit)', code);
      subscriber.complete();
    });
  });
}
