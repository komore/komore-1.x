import { deferPromise, type Observable } from '@komore/reactive';
import { commands } from 'vscode';

export function executionOfCommand<T = void>(
  command: string,
  parameters?: ReadonlyArray<unknown>
): Observable<T | undefined> {
  return deferPromise(() => commands.executeCommand<T>(command, ...(parameters ?? [])));
}
