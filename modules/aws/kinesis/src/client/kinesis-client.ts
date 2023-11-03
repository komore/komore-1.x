import { type AwsClient } from '@komore/aws';

import { type kinesisCommand } from '../kinesis.command';
import { type kinesisError } from '../kinesis.error';
import { type kinesisEvent } from '../kinesis.event';
import { type kinesisQuery } from '../kinesis.query';
import { type kinesisCommandEventMapping } from './kinesis-command-event-mapping';

/**
 * Kinesis client
 */
export type KinesisClient = AwsClient<
  typeof kinesisCommand,
  typeof kinesisCommandEventMapping,
  typeof kinesisEvent,
  typeof kinesisQuery,
  typeof kinesisError
>;
