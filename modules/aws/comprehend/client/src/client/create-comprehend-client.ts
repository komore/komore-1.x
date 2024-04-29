import { createClient } from '@komore/client';

import { createComprehendCommandHandler } from '../command/create-comprehend-command-handler';
import { comprehendCommand } from '../comprehend.command';
import { comprehendError } from '../comprehend.error';
import { comprehendEvent } from '../comprehend.event';
import { comprehendQuery } from '../comprehend.query';
import { createComprehendQueryHandler } from '../query/create-comprehend-query-handler';
import { type ComprehendClient } from './comprehend-client';
import { type ComprehendClientOptions } from './comprehend-client-options';
import { comprehendClientCommandEventMap } from './comprehend-client-command-event-map';

/**
 * Creates a Comprehend client
 *
 * @param clientOptions Comprehend client options
 * @returns Comprehend client
 */
export function createComprehendClient(clientOptions: ComprehendClientOptions): ComprehendClient {
  const { apiClient } = clientOptions;
  return createClient({
    command: comprehendCommand,
    commandEventMap: comprehendClientCommandEventMap,
    commandHandler: ({ toEvents }) => createComprehendCommandHandler({ apiClient, toEvents }),
    error: comprehendError,
    event: comprehendEvent,
    query: comprehendQuery,
    queryHandler: () => createComprehendQueryHandler({ apiClient }),
  });
}
