import { KinesisClient as AwsSdkKinesisClient } from '@aws-sdk/client-kinesis';

import { createAwsClient } from '@komore/aws';

import { kinesisCommand } from '../kinesis.command';
import { kinesisError } from '../kinesis.error';
import { kinesisEvent } from '../kinesis.event';
import { kinesisQuery } from '../kinesis.query';
import { type KinesisClient } from './kinesis-client';
import { type KinesisClientOptions } from './kinesis-client-options';
import { kinesisCommandEventMapping } from './kinesis-command-event-mapping';

/**
 * Creates an Kinesis client
 *
 * @param clientOptions Kinesis client options
 * @returns Kinesis client
 */
export function createKinesisClient(clientOptions: KinesisClientOptions): KinesisClient {
  return createAwsClient({
    clientClass: AwsSdkKinesisClient,
    clientOptions,
    commandEventMapping: kinesisCommandEventMapping,
    commandType: kinesisCommand,
    errorType: kinesisError,
    eventType: kinesisEvent,
    queryType: kinesisQuery,
  });
}
