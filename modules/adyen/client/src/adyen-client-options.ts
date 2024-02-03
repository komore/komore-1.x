import { type AdyenApiClient } from '@komore/adyen';

/**
 * Adyen client options
 */
export interface AdyenClientOptions {
  /**
   * Adyen API client
   */
  readonly apiClient: AdyenApiClient;
}
