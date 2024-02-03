import { type NotionPageId } from '@komore/notion';

/**
 * Get Page Notion query parameters
 */
export interface GetPageNotionQueryParameters {
  /**
   * Page identifier
   */
  readonly pageId: NotionPageId;
}
