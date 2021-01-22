import type { KinesisClient } from '@aws-sdk/client-kinesis';
import { withAwsClient } from '@komore/integration-amazon';
import { createKinesisClient } from '../create-kinesis-client';

/**
 * Adds a Kinesis client to a message
 * @param kinesisClient Kinesis client
 * @returns Operator function that turns a message into a message with a Kinesis client
 */
export const withKinesisClient = (kinesisClient?: KinesisClient) =>
  withAwsClient('kinesis', kinesisClient ?? createKinesisClient());
