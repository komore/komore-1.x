import { type CloudWatchApiClient } from '../cloudwatch-api-client';
import { type ListCloudWatchDashboardsParameters } from './list-cloudwatch-dashboards-parameters';
import { type ListCloudWatchDashboardsResult } from './list-cloudwatch-dashboards-result';

/**
 * Creates a function that lists CloudWatch dashboards
 *
 * @param apiClient CloudWatch API client
 * @returns Function that lists CloudWatch dashboards
 * @see {@link https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListDashboards.html ListDashboards}
 */
export function listCloudWatchDashboards(
  apiClient: CloudWatchApiClient
): (parameters: ListCloudWatchDashboardsParameters) => Observable<ListCloudWatchDashboardsResult> {
  const operation = 'ListDashboards';
  return parameters => apiClient({ operation, parameters });
}
