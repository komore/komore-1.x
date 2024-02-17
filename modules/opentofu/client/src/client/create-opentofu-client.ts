import { createClient } from '@komore/client';

import { type OpenTofuClient } from './opentofu-client';
import { type OpenTofuClientOptions } from './opentofu-client-options';
import { openTofuCommand } from '../opentofu.command';
import { openTofuCommandEventMap } from './opentofu-command-event-map';
import { createOpenTofuCommandHandler } from '../command/create-opentofu-command-handler';
import { openTofuError } from '../opentofu.error';
import { openTofuEvent } from '../opentofu.event';
import { openTofuQuery } from '../opentofu.query';
import { createOpenTofuQueryHandler } from '../query/create-opentofu-query-handler';

/**
 * Creates an OpenTofu client
 *
 * @param clientOptions OpenTofu client options
 * @returns OpenTofu client
 */
export function createOpenTofuClient(clientOptions: OpenTofuClientOptions): OpenTofuClient {
  const { workingDirectory } = clientOptions;
  return createClient({
    command: openTofuCommand,
    commandEventMap: openTofuCommandEventMap,
    commandHandler: toEvents => createOpenTofuCommandHandler({ toEvents, workingDirectory }),
    error: openTofuError,
    event: openTofuEvent,
    query: openTofuQuery,
    queryHandler: () => createOpenTofuQueryHandler({ workingDirectory }),
  });
}
