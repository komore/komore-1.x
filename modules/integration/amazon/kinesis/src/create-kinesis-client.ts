import type { KinesisClientConfig } from '@aws-sdk/client-kinesis';
import { KinesisClient } from '@aws-sdk/client-kinesis';

/**
 * Creates an Kinesis client
 * @param configuration Configuration
 * @returns Kinesis client
 */
export function createKinesisClient(configuration?: KinesisClientConfig): KinesisClient {
  return new KinesisClient(configuration ?? {});
}
