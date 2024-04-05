import { cloudWatchDomain } from '@komore/aws/cloudwatch';
import { commandProperties, createCommandType } from '@komore/command';

/**
 * CloudWatch command
 */
export const cloudWatchCommand = createCommandType(cloudWatchDomain, {
  /**
   * Publishes metric data points
   *
   * @see {@link https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricData.html PutMetricData}
   */
  putMetricData: commandProperties<>(),
});
