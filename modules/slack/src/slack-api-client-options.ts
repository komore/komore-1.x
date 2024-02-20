import { type HttpClient } from '@komore/http/client';

/**
 * Slack API client options
 */
export interface SlackApiClientOptions {
  /**
   * Endpoint URL
   */
  readonly endpointUrl?: URL;
  /**
   * HTTP client
   */
  readonly httpClient: HttpClient;
  /**
   * API token
   */
  readonly token: string;
}
