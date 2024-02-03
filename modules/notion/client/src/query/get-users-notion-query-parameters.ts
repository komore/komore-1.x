import { type NotionUserCursor } from '@komore/notion';

/**
 * Get Users Notion query parameters
 */
export interface GetUsersNotionQueryParameters {
  /**
   * Cursor
   */
  readonly cursor?: NotionUserCursor;
  /**
   * Maximum number of users to return in the result
   *
   * @note Defaults to `100`
   */
  readonly maxUsers?: number;
}
