import { type HttpClient } from '@komore/http/client';

/**
 * Discord API client options
 */
export interface DiscordApiClientOptions {
  /**
   * API endpoint URL
   */
  readonly apiEndpointUrl: URL;
  /**
   * API token
   */
  readonly apiToken: string;
  /**
   * API token type
   */
  readonly apiTokenType: 'Bearer' | 'Bot';
  /**
   * API version
   */
  readonly apiVersion: '10';
  /**
   * HTTP client
   */
  readonly httpClient: HttpClient;
}
