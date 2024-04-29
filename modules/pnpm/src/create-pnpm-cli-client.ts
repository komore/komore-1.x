import { arrayToJoinedString } from '@komore/collection';
import { streamChildProcess } from '@komore/node/process';
import { map, toArray } from '@komore/reactive';

import { type PnpmCliClient } from './pnpm-cli-client';
import { type PnpmCliClientOptions } from './pnpm-cli-client-options';

/**
 * Creates a pnpm command-line interface client
 *
 * @param clientOptions pnpm command-line interface client options
 * @returns pnpm command-line interface client
 */
export function createPnpmCliClient(clientOptions: PnpmCliClientOptions): PnpmCliClient {
  const { commandName = 'pnpm', workingDirectory } = clientOptions;
  const baseArguments = ['--json'];
  return commandParameters => {
    const args = [...baseArguments, ...commandParameters];
    const result$ = streamChildProcess(commandName, {
      arguments: args,
      workingDirectory,
    });
    const execution$ = result$.pipe(toArray(), map(arrayToJoinedString({ separator: '' })));
    return execution$;
  };
}
