import { type NotionApiClient } from '@komore/notion';

/**
 * Notion client options
 */
export interface NotionClientOptions {
  /**
   * Notion API client
   */
  readonly apiClient: NotionApiClient;
}
