import { CloudWatchLogsClient } from '@aws-sdk/client-cloudwatch-logs';
import { withAwsClient } from '@komore/integration-aws';

/**
 * Adds a CloudWatch Logs client to a message
 * @param cloudWatchLogsClient CloudWatch Logs client
 * @returns Operator function that turns a message into a message with a CloudWatch Logs client
 */
export const withCloudWatchLogsClient = (cloudWatchLogsClient: CloudWatchLogsClient) =>
  withAwsClient('cloudwatch-logs', cloudWatchLogsClient ?? new CloudWatchLogsClient({}));
