import { type Observable } from '@komore/reactive';

import { type NotionApiClient } from '../notion-api-client';
import { type NotionObjectTypes } from '../object/notion-object-types';
import { type PaginatedNotionResult } from '../pagination/paginated-notion-result';
import { type NotionSearchParameters } from './notion-search-parameters';

/**
 * Creates a function that searches for Notion objects
 *
 * @param apiClient Notion API client
 * @returns
 */
export function searchNotionObjects(
  apiClient: NotionApiClient
): <ObjectType extends keyof NotionObjectTypes>(
  searchParameters: NotionSearchParameters<ObjectType>
) => Observable<PaginatedNotionResult<ObjectType>> {
  return <ObjectType extends keyof NotionObjectTypes>(searchParameters: NotionSearchParameters<ObjectType>) => {
    const resourcePath = 'search';
    return apiClient<PaginatedNotionResult<ObjectType>>('POST', resourcePath, searchParameters);
  };
}
