import { type HttpClient } from '@komore/http/client';

import { type NotionApiVersion } from './notion-api-version';

/**
 * Notion client options
 */
export interface NotionApiClientOptions {
  /**
   * API token
   */
  readonly apiToken: string;
  /**
   * API version
   *
   * @note Defaults to `'2022-06-28'`
   */
  readonly apiVersion?: NotionApiVersion;
  /**
   * Endpoint URL
   *
   * @note Defaults to `'https://api.notion.com/v1/'`
   */
  readonly endpointUrl?: URL;
  /**
   * HTTP client
   */
  readonly httpClient: HttpClient;
}
