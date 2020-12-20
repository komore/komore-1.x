import { CloudWatchClient } from '@aws-sdk/client-cloudwatch';
import { withAwsClient } from '@komore/integration-aws';

/**
 * Adds a CloudWatch client to a message
 * @param cloudWatchClient CloudWatch client
 * @returns Operator function that turns a message into a message with a CloudWatch client
 */
export const withCloudWatchClient = (cloudWatchClient: CloudWatchClient) =>
  withAwsClient('cloudwatch', cloudWatchClient ?? new CloudWatchClient({}));
