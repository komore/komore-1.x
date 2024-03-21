import { type SnsApiClient } from '@komore/aws/sns';

/**
 * SNS query handler options
 */
export interface SnsQueryHandlerOptions {
  /**
   * SNS API client
   */
  readonly apiClient: SnsApiClient;
}
