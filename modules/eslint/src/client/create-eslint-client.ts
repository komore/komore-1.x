import { createClient } from '@komore/client';

import { createEsLintCommandHandler } from '../command/create-eslint-command-handler';
import { esLintCommand } from '../eslint.command';
import { esLintError } from '../eslint.error';
import { esLintEvent } from '../eslint.event';
import { esLintQuery } from '../eslint.query';
import { createEsLintQueryHandler } from '../query/create-eslint-query-handler';
import { type EsLintClient } from './eslint-client';
import { type EsLintClientOptions } from './eslint-client-options';
import { esLintCommandEventMap } from './eslint-command-event-map';
import { createDeferredEsLint } from './create-deferred-eslint';

/**
 * Creates an ESLint client
 *
 * @param clientOptions ESLint client options
 * @returns ESLint client
 */
export function createEsLintClient(clientOptions: EsLintClientOptions): EsLintClient {
  const esLint$ = createDeferredEsLint(clientOptions);

  return createClient({
    command: esLintCommand,
    commandEventMap: esLintCommandEventMap,
    commandHandler: events => createEsLintCommandHandler({ esLint$, events }),
    error: esLintError,
    event: esLintEvent,
    query: esLintQuery,
    queryHandler: () => createEsLintQueryHandler({ esLint$ }),
  });
}
