import { arrayToArrayFiltered, each } from '@komore/collection';
import { isErrorOfType } from '@komore/error';
import { not } from '@komore/functional';
import { jsonToObject } from '@komore/json';
import {
  childProcessOutputToStdout,
  executeChildProcess,
  nodeProcessError,
  streamChildProcess,
} from '@komore/node/process';
import { concatMap, fromArray, map, throwIfError } from '@komore/reactive';
import { isEmptyString, stringToLines } from '@komore/string';

import { type OpenTofuLog } from './log/opentofu-log';
import { openTofuCliError } from './opentofu-cli.error';
import { type OpenTofuCliClient } from './opentofu-cli-client';
import { type OpenTofuCliClientOptions } from './opentofu-cli-client-options';
import { type OpenTofuCliClientCommandOptions } from './opentofu-cli-client-command-options';

/**
 * Creates an OpenTofu CLI client
 *
 * @param clientOptions OpenTofu CLI client
 * @returns OpenTofu CLI client
 */
export function createOpenTofuCliClient(clientOptions: OpenTofuCliClientOptions): OpenTofuCliClient {
  const { commandName = 'tofu', workingDirectory } = clientOptions;
  const baseFlags: ReadonlyArray<string> = ['-no-color'];

  const client = (
    commandParameters: ReadonlyArray<string>,
    commandOptions?: OpenTofuCliClientCommandOptions
  ): Observable<OpenTofuLog | string> => {
    const asLogs = commandOptions?.asLogs ?? false;
    const extraFlags = asLogs ? ['-json'] : [];
    const args = [...commandParameters, ...baseFlags, ...extraFlags];
    console.log('args', args);
    const execution$: Observable<string | OpenTofuLog> = asLogs
      ? streamChildProcess(commandName, {
          arguments: args,
          workingDirectory,
        }).pipe(
          map(stringToLines()),
          map(arrayToArrayFiltered(not(isEmptyString))),
          map(each(jsonToObject<OpenTofuLog>())),
          concatMap(logs => fromArray(logs))
        )
      : executeChildProcess(commandName, {
          arguments: args,
          workingDirectory,
        }).pipe(map(childProcessOutputToStdout));

    return execution$.pipe(
      throwIfError(isErrorOfType(nodeProcessError.executionError), error => {
        const { stderr } = error.context;
        console.log('stderr', stderr);
        return openTofuCliError.unhandledError({ message: `${error}` });
      })
    );
  };

  return client as OpenTofuCliClient;
}
