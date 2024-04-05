import { createClient } from '@komore/client';

import { cloudWatchLogsEvent } from '../cloudwatch-logs.event';
import { cloudWatchLogsQuery } from '../cloudwatch-logs.query';
import { cloudWatchLogsError } from '../cloudwatch-logs.error';
import { cloudWatchLogsCommand } from '../cloudwatch-logs.command';
import { type CloudWatchLogsClient } from './cloudwatch-logs-client';
import { cloudWatchLogsClientCommandEventMap } from './cloudwatch-logs-client-command-event-map';
import { type CloudWatchLogsClientOptions } from './cloudwatch-logs-client-options';

/**
 * Creates a CloudWatch Logs client
 *
 * @param clientOptions CloudWatch Logs client options
 * @returns CloudWatch Logs client
 */
export function createCloudWatchLogsClient(clientOptions: CloudWatchLogsClientOptions): CloudWatchLogsClient {
  const { apiClient } = clientOptions;
  return createClient({
    command: cloudWatchLogsCommand,
    commandEventMap: cloudWatchLogsClientCommandEventMap,
    commandHandler: ({ toEvents }) => createCloudWatchLogsCommandHandler({ apiClient, toEvents }),
    error: cloudWatchLogsError,
    event: cloudWatchLogsEvent,
    query: cloudWatchLogsQuery,
    queryHandler: () => createCloudWatchLogsQueryHandler({ apiClient }),
  });
}
