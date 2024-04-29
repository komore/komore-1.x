import { arrayToArrayFiltered } from '@komore/collection';
import { not } from '@komore/functional';
import { streamChildProcess } from '@komore/node/process';
import { concatMap, fromArray, map } from '@komore/reactive';
import { isEmptyString, stringToLines } from '@komore/string';

import { type CargoCliClientOptions } from './cargo-cli-client-options';

/**
 * Creates a Cargo command-line interface client
 *
 * @param clientOptions Cargo CLI client options
 * @returns Cargo command-line interface client
 */
export function createCargoCliClient(
  clientOptions: CargoCliClientOptions
): (commandName: string, flags: ReadonlyArray<string>) => Observable<string> {
  const { workingDirectory } = clientOptions;
  return (commandName, flags) =>
    streamChildProcess('cargo', {
      arguments: [commandName, ...flags],
      workingDirectory,
    }).pipe(
      map(stringToLines()),
      map(arrayToArrayFiltered(not(isEmptyString))),
      concatMap(lines => fromArray(lines))
    );
}
