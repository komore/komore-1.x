import { type NotionUserCursor } from '../user/cursor/notion-user-cursor';

/**
 * Notion cursor types
 */
export interface NotionCursorTypes {
  readonly block: unknown;
  readonly comment: unknown;
  readonly database: unknown;
  readonly object: NotionUserCursor;
  readonly page: unknown;
  readonly page_or_database: unknown;
  readonly property_item: unknown;
  readonly user: NotionUserCursor;
}
