import { commands } from 'vscode';

import { deferPromise } from '@komore/reactive';

export function executionOfCommand<T = void>(
  command: string,
  parameters?: ReadonlyArray<unknown>
): Observable<T | undefined> {
  return deferPromise(() => commands.executeCommand<T>(command, ...(parameters ?? [])));
}
