/**
 * Notion user cursor
 */
export type NotionUserCursor = string & {
  readonly __tag_notionUserCursor: unique symbol;
};
