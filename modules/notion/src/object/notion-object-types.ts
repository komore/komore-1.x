import { type NotionDatabase } from '../database/notion-database';
import { type NotionPage } from '../page/notion-page';
import { type NotionUser } from '../user/notion-user';

/**
 * Notion object types
 */
export interface NotionObjectTypes {
  readonly block: unknown;
  readonly comment: unknown;
  readonly database: NotionDatabase;
  readonly object: NotionPage | NotionUser;
  readonly page: NotionPage;
  readonly page_or_database: NotionPage;
  readonly property_item: unknown;
  readonly user: NotionUser;
}
