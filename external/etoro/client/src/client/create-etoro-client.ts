import { createClient } from '@komore/client';

import { createEToroCommandHandler } from '../command/create-etoro-command-handler';
import { eToroCommand } from '../etoro.command';
import { eToroError } from '../etoro.error';
import { eToroEvent } from '../etoro.event';
import { eToroQuery } from '../etoro.query';
import { createEToroQueryHandler } from '../query/create-etoro-query-handler';
import { type EToroClient } from './etoro-client';
import { type EToroClientOptions } from './etoro-client-options';
import { eToroCommandEventMap } from './etoro-command-event-map';

/**
 * Creates an eToro client
 *
 * @param clientOptions eToro client options
 * @returns eToro client
 */
export function createEToroClient(clientOptions: EToroClientOptions): EToroClient {
  const { apiClient } = clientOptions;
  return createClient({
    command: eToroCommand,
    commandEventMap: eToroCommandEventMap,
    commandHandler: toEvents => createEToroCommandHandler({ apiClient, toEvents }),
    error: eToroError,
    event: eToroEvent,
    query: eToroQuery,
    queryHandler: () => createEToroQueryHandler({ apiClient }),
  });
}
