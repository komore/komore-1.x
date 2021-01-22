import type { SQSClientConfig } from '@aws-sdk/client-sqs';
import { SQSClient } from '@aws-sdk/client-sqs';

/**
 * Creates an SQS client
 * @param configuration Configuration
 * @returns SQS client
 */
export function createSQSClient(configuration?: SQSClientConfig): SQSClient {
  return new SQSClient(configuration ?? {});
}
