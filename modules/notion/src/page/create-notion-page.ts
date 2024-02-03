import { type Observable } from '@komore/reactive';

import { type NotionApiClient } from '../notion-api-client';
import { type NotionPage } from './notion-page';

/**
 * Creates a function that creates a Notion page
 *
 * @param apiClient Notion API client
 * @returns Function that creates a Notion page
 */
export function createNotionPage(apiClient: NotionApiClient): (page: NotionPage) => Observable<NotionPage> {
  return page => {
    const resourcePath = 'pages';
    return apiClient<NotionPage>('POST', resourcePath, page);
  };
}
