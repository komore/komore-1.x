import {
  PutLogEventsCommand,
  type CloudWatchLogsClient,
  type PutLogEventsCommandInput,
  type PutLogEventsCommandOutput,
} from '@aws-sdk/client-cloudwatch-logs';
import { sendAwsCommand } from '@komore/integration-aws';
import { type Observable } from '@komore/reactive';

/**
 * Uploads log events to the specified log stream
 *
 * @param cloudWatchLogsClient CloudWatch Logs client
 * @param commandInput `PutLogEvents` command input
 * @returns Command output
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html PutLogEvents}
 */
export function putLogEvents(
  cloudWatchLogsClient: CloudWatchLogsClient,
  commandInput: PutLogEventsCommandInput
): Observable<PutLogEventsCommandOutput> {
  return sendAwsCommand(cloudWatchLogsClient, new PutLogEventsCommand(commandInput));
}
