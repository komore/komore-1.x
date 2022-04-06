import { CloudWatchClient, PutMetricDataCommand, PutMetricDataCommandInput } from '@aws-sdk/client-cloudwatch';
import { sendCommand } from '@komore/integration-amazon';

/**
 * Publishes metric data points
 * @param cloudWatchClient CloudWatch client
 * @param commandInput `PutMetricData` command input
 * @returns Command output
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricData.html PutMetricData}
 */
export const putMetricData = (cloudWatchClient: CloudWatchClient, commandInput: PutMetricDataCommandInput) =>
  sendCommand(cloudWatchClient, new PutMetricDataCommand(commandInput));
