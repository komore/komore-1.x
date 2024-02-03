import { type NotionUser } from '@komore/notion';

/**
 * Get Users Notion query result
 */
export interface GetUsersNotionQueryResult {
  /**
   * Whether more users are available
   */
  readonly hasMore: boolean;
  /**
   * List of users
   */
  readonly users: ReadonlyArray<NotionUser>;
}
