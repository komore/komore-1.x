import { createClientCommandEventMap } from '@komore/client';

import { type cloudWatchLogsCommand } from '../cloudwatch-logs.command';
import { type cloudWatchLogsEvent } from '../cloudwatch-logs.event';

/**
 * CloudWatch Logs client command-to-event map
 */
export const cloudWatchLogsClientCommandEventMap = createClientCommandEventMap<
  typeof cloudWatchLogsCommand,
  typeof cloudWatchLogsEvent
>()({
  createLogGroup: 'logGroupCreated',
  putLogEvent: 'logEventPut',
});
