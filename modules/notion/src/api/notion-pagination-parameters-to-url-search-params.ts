import { NotionPaginationParameters } from './notion-pagination-parameters';

/**
 * Returns URL search parameters, given Notion pagination parameters
 *
 * @param paginationParameters
 * @returns
 */
export function notionPaginationParametersToUrlSearchParams(
  paginationParameters: NotionPaginationParameters
): URLSearchParams {
  const { page_size, start_cursor } = paginationParameters;
  return new URLSearchParams({
    ...(page_size !== undefined ? { page_size: `${page_size}` } : {}),
    ...(start_cursor !== undefined ? { start_cursor } : {}),
  });
}
