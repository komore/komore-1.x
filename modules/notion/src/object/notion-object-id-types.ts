import { type NotionDatabaseId } from '../database/id/notion-database-id';
import { type NotionPageId } from '../page/id/notion-page-id';
import { type NotionUserId } from '../user/id/notion-user-id';

/**
 * Notion object identifier types
 */
export interface NotionObjectIdTypes {
  readonly database: NotionDatabaseId;
  readonly page: NotionPageId;
  readonly user: NotionUserId;
}
