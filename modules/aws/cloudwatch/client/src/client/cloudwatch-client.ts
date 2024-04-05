import { type Client } from '@komore/client';

import { type cloudWatchCommand } from '../cloudwatch.command';
import { type cloudWatchError } from '../cloudwatch.error';
import { type cloudWatchEvent } from '../cloudwatch.event';
import { type cloudWatchQuery } from '../cloudwatch.query';
import { type cloudWatchClientCommandEventMap } from './cloudwatch-client-command-event-map';

/**
 * CloudWatch client
 */
export type CloudWatchClient = Client<
  typeof cloudWatchCommand,
  typeof cloudWatchEvent,
  typeof cloudWatchQuery,
  typeof cloudWatchError,
  typeof cloudWatchClientCommandEventMap
>;
