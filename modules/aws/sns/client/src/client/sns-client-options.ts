import { type SnsApiClient } from '@komore/aws/sns';

/**
 * SNS client options
 */
export interface SnsClientOptions {
  /**
   * SNS API client
   */
  readonly apiClient: SnsApiClient;
}
