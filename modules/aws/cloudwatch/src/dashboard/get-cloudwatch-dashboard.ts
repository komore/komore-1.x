import { type CloudWatchApiClient } from '../cloudwatch-api-client';
import { type GetCloudWatchDashboardParameters } from './get-cloudwatch-dashboard-parameters';
import { type GetCloudWatchDashboardResult } from './get-cloudwatch-dashboard-result';

/**
 * Creates a function that returns a CloudWatch dashboard
 *
 * @param apiClient CloudWatch API client
 * @returns Function that returns a CloudWatch dashboard
 * @see {@link https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetDashboard.html GetDashboard}
 */
export function getCloudWatchDashboard(
  apiClient: CloudWatchApiClient
): (parameters: GetCloudWatchDashboardParameters) => Observable<GetCloudWatchDashboardResult> {
  const operation = 'GetDashboard';
  return parameters => apiClient({ operation, parameters });
}
