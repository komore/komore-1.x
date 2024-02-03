import { type UUID } from '@komore/uuid';

/**
 * Notion database identifier
 */
export type NotionDatabaseId = UUID & {
  readonly __tag_notionDatabaseId: unique symbol;
};
