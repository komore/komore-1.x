import { Observable } from '@komore/reactive';
import { type Serializable } from 'child_process';
import { exec } from 'child_process';

/**
 * Executes a child process
 * @param command Command
 * @returns Observable that emits messages from the child process
 */
export function executeChildProcess(command: string): Observable<Serializable> {
  return new Observable<Serializable>(observer => {
    const childProcess = exec(command);
    childProcess.on('message', message => observer.next(message));
    childProcess.on('error', error => observer.error(error));
    childProcess.on('close', () => observer.complete());
    return () => childProcess.kill(); // TODO: allow overriding the signal via options
  });
}
