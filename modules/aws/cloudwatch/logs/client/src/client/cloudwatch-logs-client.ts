import { type Client } from '@komore/client';

import { type cloudWatchLogsCommand } from '../cloudwatch-logs.command';
import { type cloudWatchLogsEvent } from '../cloudwatch-logs.event';
import { type cloudWatchLogsError } from '../cloudwatch-logs.error';
import { type cloudWatchLogsQuery } from '../cloudwatch-logs.query';
import { type cloudWatchLogsClientCommandEventMap } from './cloudwatch-logs-client-command-event-map';

/**
 * CloudWatch Logs client
 */
export type CloudWatchLogsClient = Client<
  typeof cloudWatchLogsCommand,
  typeof cloudWatchLogsEvent,
  typeof cloudWatchLogsQuery,
  typeof cloudWatchLogsError,
  typeof cloudWatchLogsClientCommandEventMap
>;
