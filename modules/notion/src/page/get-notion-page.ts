import { type Observable } from '@komore/reactive';

import { type NotionApiClient } from '../notion-api-client';
import { type NotionPageId } from './id/notion-page-id';
import { type NotionPage } from './notion-page';

/**
 * Creates a function that returns a Notion page
 *
 * @param apiClient Notion API client
 * @returns Function that returns a Notion page
 * @see {@link https://developers.notion.com/reference/retrieve-a-page Retrieve a page}
 */
export function getNotionPage(apiClient: NotionApiClient): (pageId: NotionPageId) => Observable<NotionPage> {
  return pageId => {
    const resourcePath = `pages/${pageId}`;
    return apiClient<NotionPage>('GET', resourcePath);
  };
}
