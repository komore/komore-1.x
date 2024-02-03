import { type NotionCursorTypes } from '../object/notion-cursor-types';
import { type NotionPaginationParameters } from './notion-pagination-parameters';

/**
 * Returns URL search parameters, given Notion pagination parameters
 *
 * @param paginationParameters
 * @returns
 */
export function notionPaginationParametersToUrlSearchParams(
  paginationParameters: NotionPaginationParameters<keyof NotionCursorTypes>
): URLSearchParams {
  const { page_size, start_cursor } = paginationParameters;
  return new URLSearchParams({
    ...(page_size !== undefined ? { page_size: `${page_size}` } : {}),
    ...(start_cursor !== undefined ? { start_cursor: start_cursor as unknown as string } : {}), // TODO: remove cast when cursors are all defined
  });
}
