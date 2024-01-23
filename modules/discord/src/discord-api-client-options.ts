import { type HttpClient } from '@komore/http/client';

import { type DiscordApiTokenType } from './discord-api-token-type';

/**
 * Discord API client options
 */
export interface DiscordApiClientOptions {
  /**
   * API token
   */
  readonly apiToken: string;
  /**
   * API token type
   */
  readonly apiTokenType: DiscordApiTokenType;
  /**
   * API version
   */
  readonly apiVersion: '10';
  /**
   * Endpoint URL
   *
   * @note Defaults to https://discord.com/api/
   */
  readonly endpointUrl?: URL;
  /**
   * HTTP client
   */
  readonly httpClient: HttpClient;
}
