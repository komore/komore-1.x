import { createClient } from '@komore/client';

import { neptuneCommand } from '../neptune.command';
import { neptuneError } from '../neptune.error';
import { neptuneEvent } from '../neptune.event';
import { neptuneQuery } from '../neptune.query';
import { type NeptuneClient } from './neptune-client';
import { neptuneClientCommandEventMap } from './neptune-client-command-event-map';
import { type NeptuneClientOptions } from './neptune-client-options';

/**
 * Creates an Neptune client
 *
 * @param clientOptions Neptune client options
 * @returns Neptune client
 */
export function createNeptuneClient(clientOptions: NeptuneClientOptions): NeptuneClient {
  const { apiClient } = clientOptions;
  return createClient({
    command: neptuneCommand,
    commandEventMap: neptuneClientCommandEventMap,
    commandHandler: ({ toEvents }) => createNeptuneCommandHandler({ apiClient, toEvents }),
    error: neptuneError,
    event: neptuneEvent,
    query: neptuneQuery,
    queryHandler: () => createNeptuneQueryHandler({ apiClient }),
  });
}
