import { type HttpClient } from '@komore/http/client';

/**
 * SendGrid client options
 */
export interface SendGridClientOptions {
  /**
   * API key
   */
  readonly apiKey: string;
  /**
   * Endpoint URL
   */
  readonly endpointUrl: URL;
  /**
   * HTTP client
   */
  readonly httpClient: HttpClient;
}
