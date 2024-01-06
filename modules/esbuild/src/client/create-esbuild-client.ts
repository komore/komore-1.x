import { initialize } from 'esbuild';

import { createClient } from '@komore/client';
import { cache, deferPromise } from '@komore/reactive';

import { createEsbuildCommandHandler } from '../command/create-esbuild-command-handler';
import { esbuildCommand } from '../esbuild.command';
import { esbuildError } from '../esbuild.error';
import { esbuildEvent } from '../esbuild.event';
import { esbuildQuery } from '../esbuild.query';
import { createEsbuildQueryHandler } from '../query/create-esbuild-query-handler';
import { type EsbuildClient } from './esbuild-client';
import { type EsbuildClientOptions } from './esbuild-client-options';
import { esbuildCommandEventMap } from './esbuild-command-event-map';

/**
 * Creates an esbuild client
 *
 * @param clientOptions esbuild client options
 * @returns esbuild client
 */
export function createEsbuildClient(clientOptions: EsbuildClientOptions): EsbuildClient {
  const {} = clientOptions;
  const initialized$ = deferPromise(() => initialize({})).pipe(cache());

  return createClient({
    command: esbuildCommand,
    commandEventMap: esbuildCommandEventMap,
    commandHandler: toEvents => createEsbuildCommandHandler({ initialized$, toEvents }),
    error: esbuildError,
    event: esbuildEvent,
    query: esbuildQuery,
    queryHandler: () => createEsbuildQueryHandler({}),
  });
}
