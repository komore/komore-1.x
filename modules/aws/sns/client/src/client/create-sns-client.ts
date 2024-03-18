import { createClient } from '@komore/client';

import { snsCommand } from '../sns.command';
import { snsError } from '../sns.error';
import { snsEvent } from '../sns.event';
import { snsQuery } from '../sns.query';
import { type SnsClient } from './sns-client';
import { snsClientCommandEventMap } from './sns-client-command-event-map';
import { type SnsClientOptions } from './sns-client-options';

/**
 * Creates an SNS client
 *
 * @param clientOptions SNS client options
 * @returns SNS client
 */
export function createSnsClient(clientOptions: SnsClientOptions): SnsClient {
  const { apiClient } = clientOptions;
  return createClient({
    command: snsCommand,
    commandEventMap: snsClientCommandEventMap,
    commandHandler: ({ toEvents }) => createSnsCommandHandler({ apiClient, toEvents }),
    error: snsError,
    event: snsEvent,
    query: snsQuery,
    queryHandler: () => createSnsQueryHandler({ apiClient }),
  });
}
