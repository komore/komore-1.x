import { each } from '@komore/collection';
import { not } from '@komore/functional';
import { jsonToObject } from '@komore/json';
import { streamChildProcess } from '@komore/node/process';
import { concatMap, fromArray, map, type Observable } from '@komore/reactive';
import { isEmptyString, stringToLines } from '@komore/string';

import { type GenericOpenTofuLog } from '../log/generic-opentofu-log';

/**
 * Creates a function that executes an OpenTofu command and emits a stream of logs
 *
 * @param basePath Base path
 * @returns Function that executes an OpenTofu command and emits a stream of logs
 */
export function executeOpenTofuCommand(
  basePath: string
): (commandName: string, flags: ReadonlyArray<string>) => Observable<GenericOpenTofuLog> {
  return (commandName, flags) =>
    streamChildProcess('opentofu', {
      arguments: [commandName, ...flags, '-input=false', '-json', '-no-color'],
      cwd: basePath,
    }).pipe(
      map(stringToLines()),
      map(lines => lines.filter(not(isEmptyString))),
      map(each(jsonToObject<GenericOpenTofuLog>())),
      concatMap(logs => fromArray(logs))
    );
}
