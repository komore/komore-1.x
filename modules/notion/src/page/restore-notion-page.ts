import { type NotionApiClient } from '../notion-api-client';
import { type NotionPageId } from './id/notion-page-id';
import { type NotionPage } from './notion-page';

/**
 * Creates a function that restores a Notion page
 *
 * @param apiClient Notion API client
 * @returns Function that restores a Notion page
 */
export function restoreNotionPage(apiClient: NotionApiClient): (pageId: NotionPageId) => Observable<NotionPage> {
  return pageId => {
    const resourcePath = `pages/${pageId}`;
    return apiClient<NotionPage>('PATCH', resourcePath, { archived: false });
  };
}
