import { type NotionPage } from '@komore/notion';

/**
 * Create Notion Page command parameters
 */
export interface CreateNotionPageCommandParameters {
  /**
   * Page
   */
  readonly page: NotionPage;
}
