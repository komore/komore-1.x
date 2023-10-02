import { not } from '@komore/functional';
import { jsonToObject } from '@komore/json';
import { streamChildProcess } from '@komore/node';
import { concatMap, fromArray, map, mapEach, type Observable } from '@komore/reactive';
import { isEmptyString, stringToLines } from '@komore/string';

import { type GenericTerraformLog } from '../log/generic-terraform-log';

/**
 * Creates a function that executes a Terraform command and emits a stream of logs
 *
 * @param basePath Base path
 * @returns Function that executes a Terraform command and emits a stream of logs
 */
export function executeTerraform(
  basePath: string
): (commandName: string, flags: ReadonlyArray<string>) => Observable<GenericTerraformLog> {
  return (commandName, flags) =>
    streamChildProcess('terraform', {
      arguments: [commandName, ...flags, '-input=false', '-json', '-no-color'],
      cwd: basePath,
    }).pipe(
      map(stringToLines()),
      map(lines => lines.filter(not(isEmptyString))),
      mapEach(jsonToObject<GenericTerraformLog>()),
      concatMap(logs => fromArray(logs))
    );
}
