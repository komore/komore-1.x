import { type CloudWatchLogsApiClient } from '../cloudwatch-logs-api-client';
import { type CreateCloudWatchLogsGroupParameters } from './create-cloudwatch-logs-group-parameters';

/**
 * Creates a function that creates a CloudWatch Logs group
 *
 * @param apiClient CloudWatch Logs API client
 * @returns Function that creates a CloudWatch Logs group
 * @see {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateLogGroup.html CreateLogGroup}
 * @permission logs:CreateLogGroup
 * @permission logs:TagLogGroup
 * @permission logs:TagResource
 */
export function createCloudWatchLogsGroup(
  apiClient: CloudWatchLogsApiClient
): (parameters: CreateCloudWatchLogsGroupParameters) => Observable<void> {
  const operation = 'CreateLogGroup';
  return parameters => apiClient({ operation, parameters });
}
