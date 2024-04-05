import { CloudWatchLogsApiClient } from '@komore/aws/cloudwatch/logs';

/**
 * CloudWatch Logs client options
 */
export interface CloudWatchLogsClientOptions {
  /**
   * CloudWatch Logs API client
   */
  readonly apiClient: CloudWatchLogsApiClient;
}
