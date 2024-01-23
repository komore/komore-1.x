import { type HttpClient } from '@komore/http/client';

/**
 * eToro API client options
 */
export interface EToroApiClientOptions {
  /**
   * Endpoint URL
   *
   * @note Defaults to `https://etoro.com/`
   */
  readonly endpointUrl?: URL;
  /**
   * HTTP client
   */
  readonly httpClient: HttpClient;
  /**
   * Static endpoint URL
   *
   * @note Defaults to `https://api.etorostatic.com/'
   */
  readonly staticEndpointUrl?: URL;
  /**
   * Token
   */
  readonly token: string;
}
