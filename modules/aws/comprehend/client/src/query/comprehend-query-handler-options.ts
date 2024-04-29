import { type ComprehendApiClient } from '@komore/aws/comprehend';

/**
 * Comprehend query handler options
 */
export interface ComprehendQueryHandlerOptions {
  /**
   * Comprehend API client
   */
  readonly apiClient: ComprehendApiClient;
}
