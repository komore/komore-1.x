import { type ComprehendApiClient } from '@komore/aws/comprehend';

/**
 * Comprehend client options
 */
export interface ComprehendClientOptions {
  /**
   * Comprehend API client
   */
  readonly apiClient: ComprehendApiClient;
}
