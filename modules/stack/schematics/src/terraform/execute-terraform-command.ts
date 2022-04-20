import { isEmptyString, stringToLines } from '@komore/string';
import { concatMap, fromArray, map, mapEach, type Observable } from '@komore/reactive';
import { streamChildProcess } from '@komore/runtime/node';
import { type TerraformLog } from './log/terraform-log';
import { type TerraformLogDetails } from './log/terraform-log-details';
import { jsonToObject, not } from '@komore/functional';

/**
 * Executes a Terraform command
 *
 * @param basePath Base path
 * @param commandName Command name
 * @param flags Flags
 */
export function executeTerraformCommand(
  basePath: string,
  commandName: string,
  flags: ReadonlyArray<string>
): Observable<TerraformLog<keyof TerraformLogDetails>> {
  return streamChildProcess('terraform', {
    args: [commandName, ...flags, '-input=false', '-json', '-no-color'],
    cwd: basePath,
  }).pipe(
    map(stringToLines()),
    map(lines => lines.filter(not(isEmptyString))),
    mapEach(jsonToObject<TerraformLog<keyof TerraformLogDetails>>()),
    concatMap(logs => fromArray(logs))
  );
}
