import {
  CreateLogGroupCommand,
  type CloudWatchLogsClient,
  type CreateLogGroupCommandInput,
  type CreateLogGroupCommandOutput,
} from '@aws-sdk/client-cloudwatch-logs';
import { sendAwsCommand } from '@komore/integration-aws';
import { type Observable } from '@komore/reactive';

/**
 * Creates a log group
 *
 * @param cloudWatchLogsClient CloudWatch Logs client
 * @param commandInput `PutMetricData` command input
 * @returns Command output
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateLogGroup.html CreateLogGroup}
 */
export function createLogGroup(
  cloudWatchLogsClient: CloudWatchLogsClient,
  commandInput: CreateLogGroupCommandInput
): Observable<CreateLogGroupCommandOutput> {
  return sendAwsCommand(cloudWatchLogsClient, new CreateLogGroupCommand(commandInput));
}
