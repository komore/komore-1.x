import { matchQuery } from '@komore/query';

import { notionPaginationParametersToUrlSearchParams } from '../api/notion-pagination-parameters-to-url-search-params';
import { type NotionQueryHandler } from './notion-query-handler';
import { type NotionQueryHandlerOptions } from './notion-query-handler-options';

/**
 * Creates a Notion query handler
 *
 * @param handlerOptions Notion query handler options
 * @returns Notion query handler
 */
export function createNotionQueryHandler(handlerOptions: NotionQueryHandlerOptions): NotionQueryHandler {
  const { endpointUrl, httpClient } = handlerOptions;
  return query =>
    matchQuery(query, {
      listUsers: paginationParameters => {
        // TODO: remove max 100 items limitation
        const searchParams = notionPaginationParametersToUrlSearchParams(paginationParameters);
        const url = new URL(`users?${searchParams}`, endpointUrl);
        return httpClient({ url });
      },
    });
}
