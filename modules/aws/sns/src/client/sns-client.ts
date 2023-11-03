import { type AwsClient } from '@komore/aws';

import { type snsCommand } from '../sns.command';
import { type snsError } from '../sns.error';
import { type snsEvent } from '../sns.event';
import { type snsQuery } from '../sns.query';
import { type snsCommandEventMapping } from './sns-command-event-mapping';

/**
 * SNS client
 */
export type SnsClient = AwsClient<
  typeof snsCommand,
  typeof snsCommandEventMapping,
  typeof snsEvent,
  typeof snsQuery,
  typeof snsError
>;
