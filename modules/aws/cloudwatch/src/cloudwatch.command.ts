import { type PutMetricDataCommandInput } from '@aws-sdk/client-cloudwatch';

import { createAwsCommandType } from '@komore/aws';
import { commandProperties } from '@komore/command';

import { cloudWatchDomain } from './cloudwatch.domain';

/**
 * CloudWatch command
 */
export const cloudWatchCommand = createAwsCommandType(cloudWatchDomain, {
  /**
   * Publishes metric data points
   *
   * @see {@link https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricData.html PutMetricData}
   */
  putMetricData: commandProperties<PutMetricDataCommandInput>(),
});
