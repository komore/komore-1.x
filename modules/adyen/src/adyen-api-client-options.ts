import { type HttpClient } from '@komore/http/client';

import { type AdyenApiClientApisOptions } from './adyen-api-client-apis-options';

/**
 * Adyen API client options
 */
export interface AdyenApiClientOptions {
  /**
   * APIs options
   *
   * Adyen API endpoint URLs are based on company accounts:
   *
   * - Test: TODO
   * - Live: https://[prefix]-pal-live.adyenpayments.com/pal/servlet/Payment/
   */
  readonly apis: Partial<AdyenApiClientApisOptions>;
  /**
   * HTTP client
   */
  readonly httpClient: HttpClient;
}
