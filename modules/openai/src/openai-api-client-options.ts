import { type HttpClient } from '@komore/http/client';

/**
 * OpenAI API client options
 */
export interface OpenAiApiClientOptions {
  /**
   * Endpoint URL
   */
  readonly endpointUrl: URL;
  /**
   * HTTP client
   */
  readonly httpClient: HttpClient;
}
