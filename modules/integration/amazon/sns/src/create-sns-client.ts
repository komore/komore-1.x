import { type SNSClientConfig } from '@aws-sdk/client-sns';
import { SNSClient } from '@aws-sdk/client-sns';

/**
 * Creates an SNS client
 * @param configuration Configuration
 * @returns SNS client
 */
export function createSNSClient(configuration?: SNSClientConfig): SNSClient {
  return new SNSClient(configuration ?? {});
}
