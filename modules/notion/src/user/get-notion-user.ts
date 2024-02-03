import { type Observable } from '@komore/reactive';

import { type NotionApiClient } from '../notion-api-client';
import { type NotionUserId } from './id/notion-user-id';
import { type NotionUser } from './notion-user';

/**
 * Creates a function that returns a Notion user
 *
 * @param apiClient Notion API client
 * @returns Function that returns a Notion user
 * @see {@link https://developers.notion.com/reference/get-user Retrieve a user}
 */
export function getNotionUser(apiClient: NotionApiClient): (userId: NotionUserId) => Observable<NotionUser> {
  return userId => {
    const resourcePath = `users/${userId}`;
    return apiClient<NotionUser>('GET', resourcePath);
  };
}
