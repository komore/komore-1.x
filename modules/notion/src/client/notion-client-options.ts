import { type HttpClient } from '@komore/http/client';

import { type NotionApiVersion } from '../api/notion-api-version';

/**
 * Notion client options
 */
export interface NotionClientOptions {
  /**
   * API token
   */
  readonly apiToken: string;
  /**
   * API version
   */
  readonly apiVersion: NotionApiVersion;
  /**
   * Endpoint URL
   *
   * @note Defaults to https://api.notion.com/v1/
   */
  readonly endpointUrl?: URL;
  /**
   * HTTP client
   */
  readonly httpClient: HttpClient;
}
