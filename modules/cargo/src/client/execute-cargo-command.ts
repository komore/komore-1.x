import { not } from '@komore/functional';
import { streamChildProcess } from '@komore/node/process';
import { concatMap, fromArray, map } from '@komore/reactive';
import { isEmptyString, stringToLines } from '@komore/string';

/**
 * Creates a function that executes a Cargo command and emits a stream of logs
 *
 * @param basePath Base path
 * @returns Function that executes an OpenTofu command and emits a stream of logs
 */
export function executeCargoCommand(
  basePath: string
): (commandName: string, flags: ReadonlyArray<string>) => Observable<string> {
  return (commandName, flags) =>
    streamChildProcess('cargo', {
      arguments: [commandName, ...flags],
      cwd: basePath,
    }).pipe(
      map(stringToLines()),
      map(lines => lines.filter(not(isEmptyString))),
      concatMap(lines => fromArray(lines))
    );
}
