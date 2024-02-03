import { type NotionApiClient } from '@komore/notion';

/**
 * Notion query handler options
 */
export interface NotionQueryHandlerOptions {
  /**
   * Notion API client
   */
  readonly apiClient: NotionApiClient;
}
