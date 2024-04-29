import { arrayToArrayFiltered, arrayToJoinedString, each } from '@komore/collection';
import { isErrorOfType } from '@komore/error';
import { not } from '@komore/functional';
import { jsonToObject } from '@komore/json';
import { nodeProcessError, streamChildProcess } from '@komore/node/process';
import { concatMap, fromArray, map, throwIfError, toArray } from '@komore/reactive';
import { isEmptyString, stringToLines } from '@komore/string';

import { type TerraformLog } from './log/terraform-log';
import { terraformCliError } from './terraform-cli.error';
import { type TerraformCliClient } from './terraform-cli-client';
import { type TerraformCliClientOptions } from './terraform-cli-client-options';
import { type TerraformCliClientCommandOptions } from './terraform-cli-client-command-options';

/**
 * Creates an Terraform CLI client
 *
 * @param clientOptions Terraform CLI client
 * @returns Terraform CLI client
 */
export function createTerraformCliClient(clientOptions: TerraformCliClientOptions): TerraformCliClient {
  const { commandName = 'terraform', workingDirectory } = clientOptions;
  const baseFlags: ReadonlyArray<string> = ['-no-color'];

  const client = (
    commandParameters: ReadonlyArray<string>,
    commandOptions?: TerraformCliClientCommandOptions
  ): Observable<TerraformLog | string> => {
    const asLogs = commandOptions?.asLogs ?? false;
    const extraFlags = asLogs ? ['-json'] : [];
    const args = [...commandParameters, ...baseFlags, ...extraFlags];
    const result$ = streamChildProcess(commandName, {
      arguments: args,
      workingDirectory,
    });
    const execution$: Observable<string | TerraformLog> = asLogs
      ? result$.pipe(
          map(stringToLines()),
          map(arrayToArrayFiltered(not(isEmptyString))),
          map(each(jsonToObject<TerraformLog>())),
          concatMap(logs => fromArray(logs))
        )
      : result$.pipe(toArray(), map(arrayToJoinedString({ separator: '' })));

    return execution$.pipe(
      throwIfError(isErrorOfType(nodeProcessError.executionError), error => {
        const { stderr } = error.context;
        console.log('stderr', stderr, error);
        return terraformCliError.unhandledError({ message: `${error}` });
      })
    );
  };

  return client as TerraformCliClient;
}
