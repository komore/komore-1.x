import { type HttpClient } from '@komore/http/client';

/**
 * AWS API client options
 */
export interface AwsApiClientOptions {
  /**
   * HTTP client
   */
  readonly httpClient: HttpClient;
}
