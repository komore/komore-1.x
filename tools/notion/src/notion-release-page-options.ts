import { type NotionApiClient, type NotionPageId } from '@komore/notion';

/**
 * Notion release page options
 */
export interface NotionReleasePageOptions {
  /**
   * Notion API client
   */
  readonly apiClient: NotionApiClient;
  /**
   * Page identifier
   */
  readonly pageId: NotionPageId;
}
