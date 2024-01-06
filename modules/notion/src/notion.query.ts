import { createQueryType, queryProperties } from '@komore/query';

import { type NotionPaginationParameters } from './api/notion-pagination-parameters';
import { type PaginatedNotionResult } from './api/paginated-notion-result';
import { notionDomain } from './notion.domain';

/**
 * Notion query
 */
export const notionQuery = createQueryType(notionDomain, {
  /**
   * Returns the list of users
   *
   * @see {@link https://developers.notion.com/reference/get-users List all users}
   * @note Requires a `Read user information` capability
   */
  listUsers: queryProperties<PaginatedNotionResult<'user'>, NotionPaginationParameters>(),
});
