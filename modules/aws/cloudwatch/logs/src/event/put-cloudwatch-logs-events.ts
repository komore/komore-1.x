import { type CloudWatchLogsApiClient } from '../cloudwatch-logs-api-client';
import { type PutCloudWatchLogsEventsParameters } from './put-cloudwatch-logs-events-parameters';
import { type PutCloudWatchLogsEventsResult } from './put-cloudwatch-logs-events-result';

/**
 * Creates a function that uploads a batch of CloudWatch Logs events
 *
 * @param apiClient CloudWatch Logs API client
 * @returns Function that uploads a batch of CloudWatch Logs events
 * @see {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html PutLogEvents}
 */
export function putCloudWatchLogEvents(
  apiClient: CloudWatchLogsApiClient
): (parameters: PutCloudWatchLogsEventsParameters) => Observable<PutCloudWatchLogsEventsResult> {
  const operation = 'PutLogEvents';
  return parameters => apiClient({ operation, parameters });
}
