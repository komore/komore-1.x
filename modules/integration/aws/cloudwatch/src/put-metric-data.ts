import {
  PutMetricDataCommand,
  type CloudWatchClient,
  type PutMetricDataCommandInput,
} from '@aws-sdk/client-cloudwatch';
import { sendAwsCommand } from '@komore/integration-aws';
import { redactValue, type Observable } from '@komore/reactive';

/**
 * Publishes metric data points
 *
 * @param cloudWatchClient CloudWatch client
 * @param commandInput `PutMetricData` command input
 * @returns Command output
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricData.html PutMetricData}
 */
export function putMetricData(
  cloudWatchClient: CloudWatchClient,
  commandInput: PutMetricDataCommandInput
): Observable<void> {
  return sendAwsCommand(cloudWatchClient, new PutMetricDataCommand(commandInput)).pipe(redactValue());
}
