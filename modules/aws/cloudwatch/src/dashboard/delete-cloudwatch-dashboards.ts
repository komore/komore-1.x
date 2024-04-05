import { type CloudWatchApiClient } from '../cloudwatch-api-client';
import { type DeleteCloudWatchDashboardsParameters } from './delete-cloudwatch-dashboards-parameters';

/**
 * Creates a function that deletes CloudWatch dashboards
 *
 * @param apiClient CloudWatch API client
 * @returns Function that deletes CloudWatch dashboards
 * @see {@link https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DeleteDashboards.html DeleteDashboards}
 */
export function deleteCloudWatchDashboards(
  apiClient: CloudWatchApiClient
): (parameters: DeleteCloudWatchDashboardsParameters) => Observable<void> {
  const operation = 'DeleteDashboards';
  return parameters => apiClient({ operation, parameters });
}
