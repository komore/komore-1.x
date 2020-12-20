import {
  CloudWatchLogsClient,
  CreateLogGroupCommand,
  CreateLogGroupCommandInput
} from '@aws-sdk/client-cloudwatch-logs';
import { sendCommand } from '@komore/integration-aws';

/**
 * Creates a log group
 * @param cloudWatchLogsClient CloudWatch Logs client
 * @param commandInput `PutMetricData` command input
 * @returns Command output
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateLogGroup.html CreateLogGroup}
 */
export const createLogGroup = (cloudWatchLogsClient: CloudWatchLogsClient, commandInput: CreateLogGroupCommandInput) =>
  sendCommand(cloudWatchLogsClient, new CreateLogGroupCommand(commandInput));
