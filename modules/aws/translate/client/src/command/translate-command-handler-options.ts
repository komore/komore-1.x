import { type TranslateApiClient } from '@komore/aws/translate';

/**
 * Translate command handler options
 */
export interface TranslateCommandHandlerOptions {
  /**
   * API client
   */
  readonly apiClient: TranslateApiClient;
}
