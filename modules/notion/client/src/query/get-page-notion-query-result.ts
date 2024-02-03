import { type NotionPage } from '@komore/notion';

/**
 * Get Page Notion query result
 */
export interface GetPageNotionQueryResult {
  /**
   * Page
   */
  readonly page: NotionPage;
}
