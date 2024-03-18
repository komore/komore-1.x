import { type TranslateApiClient } from '@komore/aws/translate';

/**
 * Translate client options
 */
export interface TranslateClientOptions {
  /**
   * API client
   */
  readonly apiClient: TranslateApiClient;
}
