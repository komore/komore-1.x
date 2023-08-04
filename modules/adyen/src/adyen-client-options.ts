import { type HttpClient } from '@komore/http/client';

import { type AdyenClientApiVersions } from './adyen-client-api-versions';

/**
 * Adyen client options
 */
export interface AdyenClientOptions {
  /**
   * APIs endpoint URL
   *
   * Adyen API endpoint URLs are based on company accounts:
   *
   * - Test:
   * - Live: https://[prefix]-pal-live.adyenpayments.com/pal/servlet/Payment/
   */
  readonly apis: AdyenClientApiVersions;
  /**
   * HTTP client
   */
  readonly httpClient: HttpClient;
}
