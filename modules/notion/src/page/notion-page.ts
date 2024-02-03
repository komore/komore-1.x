import { type NotionPageId } from './id/notion-page-id';

/**
 * Notion page
 */
export interface NotionPage {
  /**
   * Notion page identifier
   */
  readonly id: NotionPageId;
  /**
   * Object type
   */
  readonly object: 'page';
}
