import { CloudWatchLogsClient, PutLogEventsCommand, PutLogEventsCommandInput } from '@aws-sdk/client-cloudwatch-logs';
import { sendCommand } from '@komore/integration-aws';

/**
 * Uploads log events to the specified log stream
 * @param cloudWatchLogsClient CloudWatch Logs client
 * @param commandInput `PutLogEvents` command input
 * @returns Command output
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html PutLogEvents}
 */
export const putLogEvents = (cloudWatchLogsClient: CloudWatchLogsClient, commandInput: PutLogEventsCommandInput) =>
  sendCommand(cloudWatchLogsClient, new PutLogEventsCommand(commandInput));
