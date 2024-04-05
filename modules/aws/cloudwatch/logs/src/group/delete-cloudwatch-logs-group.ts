import { type CloudWatchLogsApiClient } from '../cloudwatch-logs-api-client';
import { type DeleteCloudWatchLogsGroupParameters } from './delete-cloudwatch-logs-group-parameters';

/**
 * Creates a function that deletes a CloudWatch Logs group
 *
 * @param apiClient CloudWatch Logs API client
 * @returns Function that deletes a CloudWatch Logs group
 * @see {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteLogGroup.html DeleteLogGroup}
 */
export function deleteCloudWatchLogsGroup(
  apiClient: CloudWatchLogsApiClient
): (parameters: DeleteCloudWatchLogsGroupParameters) => Observable<void> {
  const operation = 'DeleteLogGroup';
  return parameters => apiClient({ operation, parameters });
}
