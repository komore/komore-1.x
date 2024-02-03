import { type UUID } from '@komore/uuid';

/**
 * Notion user identifier
 */
export type NotionUserId = UUID & {
  readonly __tag_notionUserId: unique symbol;
};
