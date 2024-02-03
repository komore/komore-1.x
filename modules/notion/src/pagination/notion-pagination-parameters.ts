import { NotionCursorTypes } from '../object/notion-cursor-types';

/**
 * Notion pagination parameters
 */
export interface NotionPaginationParameters<ObjectType extends keyof NotionCursorTypes> {
  /**
   * The number of items to include in the response
   *
   * @note Defaults to `100`
   * @note Cannot be higher than `100`
   */
  readonly page_size?: number;
  /**
   * Cursor returned from a previous response via `next_cursor`
   *
   * @note Defaults to the start of the list
   */
  readonly start_cursor?: NotionCursorTypes[ObjectType];
}
