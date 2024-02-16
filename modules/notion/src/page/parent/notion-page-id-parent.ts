import { type NotionPageId } from '../id/notion-page-id';

/**
 * Notion page identifier parent
 */
export interface NotionPageIdParent {
  /**
   * Parent type
   */
  readonly type: 'page_id';
  /**
   * Page identifier
   */
  readonly page_id: NotionPageId;
}
