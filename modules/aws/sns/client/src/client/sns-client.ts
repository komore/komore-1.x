import { type Client } from '@komore/client';

import { type snsCommand } from '../sns.command';
import { type snsError } from '../sns.error';
import { type snsEvent } from '../sns.event';
import { type snsQuery } from '../sns.query';
import { type snsClientCommandEventMap } from './sns-client-command-event-map';

/**
 * SNS client
 */
export type SnsClient = Client<
  typeof snsCommand,
  typeof snsEvent,
  typeof snsQuery,
  typeof snsError,
  typeof snsClientCommandEventMap
>;
