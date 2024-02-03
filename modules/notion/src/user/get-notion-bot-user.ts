import { type Observable } from '@komore/reactive';

import { type NotionApiClient } from '../notion-api-client';
import { type NotionBotUser } from './notion-bot-user';

/**
 * Creates a function that returns a Notion user
 *
 * @param apiClient Notion API client
 * @returns Function that returns a Notion user
 * @see {@link https://developers.notion.com/reference/get-self Retrieve your token's bot user}
 */
export function getNotionBotUser(apiClient: NotionApiClient): () => Observable<NotionBotUser> {
  return () => {
    const resourcePath = `users/me`;
    return apiClient<NotionBotUser>('GET', resourcePath);
  };
}
