import { type CloudWatchApiClient } from '../cloudwatch-api-client';
import { type PutCloudWatchMetricDataParameters } from './put-cloudwatch-metric-data-parameters';

/**
 * Creates a function that publishes CloudWatch metric data points
 *
 * @param apiClient CloudWatch API client
 * @returns Function that publishes CloudWatch metric data points
 * @see {@link https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricData.html PutMetricData}
 */
export function putCloudWatchMetricData(
  apiClient: CloudWatchApiClient
): (parameters: PutCloudWatchMetricDataParameters) => Observable<void> {
  const operation = 'PutMetricData';
  return parameters => apiClient({ operation, parameters });
}
