import { createClientCommandEventMap } from '@komore/client';

import { type cloudWatchCommand } from '../cloudwatch.command';
import { type cloudWatchEvent } from '../cloudwatch.event';

/**
 * CloudWatch client command-to-event map
 */
export const cloudWatchClientCommandEventMap = createClientCommandEventMap<
  typeof cloudWatchCommand,
  typeof cloudWatchEvent
>()({
  putMetricData: '',
});
