import { type NotionApiClient } from '../notion-api-client';
import { type NotionPaginationParameters } from '../pagination/notion-pagination-parameters';
import { notionPaginationParametersToUrlSearchParams } from '../pagination/notion-pagination-parameters-to-url-search-params';
import { type PaginatedNotionResult } from '../pagination/paginated-notion-result';

/**
 * Creates a function that returns a list of Notion users
 *
 * @param apiClient Notion API client
 * @returns Function that returns a list of Notion users
 */
export function getNotionUsers(
  apiClient: NotionApiClient
): (paginationParameters: NotionPaginationParameters<'user'>) => Observable<PaginatedNotionResult<'user'>> {
  return paginationParameters => {
    const searchParams = notionPaginationParametersToUrlSearchParams(paginationParameters);
    const resourcePath = `users?${searchParams}`;
    return apiClient<PaginatedNotionResult<'user'>>('GET', resourcePath);
  };
}
