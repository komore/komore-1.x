import { createClient } from '@komore/client';

import { cloudWatchCommand } from '../cloudwatch.command';
import { cloudWatchError } from '../cloudwatch.error';
import { cloudWatchEvent } from '../cloudwatch.event';
import { cloudWatchQuery } from '../cloudwatch.query';
import { type CloudWatchClient } from './cloudwatch-client';
import { cloudWatchClientCommandEventMap } from './cloudwatch-client-command-event-map';
import { type CloudWatchClientOptions } from './cloudwatch-client-options';

/**
 * Creates a CloudWatch client
 *
 * @param clientOptions CloudWatch client options
 * @returns CloudWatch client
 */
export function createCloudWatchClient(clientOptions: CloudWatchClientOptions): CloudWatchClient {
  const { apiClient } = clientOptions;
  return createClient({
    command: cloudWatchCommand,
    commandEventMap: cloudWatchClientCommandEventMap,
    commandHandler: ({ toEvents }) => createCloudWatchCommandHandler({ apiClient, toEvents }),
    error: cloudWatchError,
    event: cloudWatchEvent,
    query: cloudWatchQuery,
    queryHandler: () => createCloudWatchQueryHandler({ apiClient }),
  });
}
