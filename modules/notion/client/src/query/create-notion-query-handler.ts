import { getNotionUsers } from '@komore/notion';
import { matchQuery } from '@komore/query';
import { map } from '@komore/reactive';

import { type NotionQueryHandler } from './notion-query-handler';
import { type NotionQueryHandlerOptions } from './notion-query-handler-options';

/**
 * Creates a Notion query handler
 *
 * @param handlerOptions Notion query handler options
 * @returns Notion query handler
 */
export function createNotionQueryHandler(handlerOptions: NotionQueryHandlerOptions): NotionQueryHandler {
  const { apiClient } = handlerOptions;
  const getUsers = getNotionUsers(apiClient);
  return query =>
    matchQuery(query, {
      getUsers: ({ cursor: start_cursor, maxUsers: page_size = 100 }) =>
        getUsers({ page_size, start_cursor }).pipe(
          map(({ has_more: hasMore, results: users, next_cursor: nextCursor }) => ({
            hasMore,
            users,
            ...(nextCursor !== undefined ? { nextCursor } : {}),
          }))
        ),
    });
}
