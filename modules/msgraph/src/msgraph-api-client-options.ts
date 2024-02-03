import { type HttpClient } from '@komore/http/client';

import { type MsGraphApiVersion } from './msgraph-api-version';

/**
 * Microsoft Graph API client options
 */
export interface MsGraphApiClientOptions {
  /**
   * Endpoint URL
   *
   * @note Defaults to `https://graph.microsoft.com/'
   */
  readonly endpointUrl?: URL;
  /**
   * HTTP client
   */
  readonly httpClient: HttpClient;
  /**
   * API version
   *
   * @note Defaults to `v1.0`
   */
  readonly version?: MsGraphApiVersion;
}
