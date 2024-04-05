import { type CloudWatchApiClient } from '@komore/aws/cloudwatch';

/**
 * CloudWatch client options
 */
export interface CloudWatchClientOptions {
  /**
   * CloudWatch API client
   */
  readonly apiClient: CloudWatchApiClient;
}
