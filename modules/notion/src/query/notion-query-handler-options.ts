import { type HttpClient } from '@komore/http/client';

import { type NotionApiVersion } from '../api/notion-api-version';

/**
 * Notion query handler options
 */
export interface NotionQueryHandlerOptions {
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
   */
  readonly endpointUrl: URL;
  /**
   * HTTP client
   */
  readonly httpClient: HttpClient;
}
