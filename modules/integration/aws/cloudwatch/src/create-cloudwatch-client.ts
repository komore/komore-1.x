import { type CloudWatchClientConfig } from '@aws-sdk/client-cloudwatch';
import { CloudWatchClient } from '@aws-sdk/client-cloudwatch';

/**
 * Creates a CloudWatch client
 * @param configuration Configuration
 * @returns CloudWatch client
 */
export function createCloudWatchClient(configuration?: CloudWatchClientConfig) {
  return new CloudWatchClient(configuration ?? {});
}
