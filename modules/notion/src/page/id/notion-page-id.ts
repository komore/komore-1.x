import { type UUID } from '@komore/uuid';

/**
 * Notion page identifier
 */
export type NotionPageId = UUID & {
  readonly __tag_notionPageId: unique symbol;
};
