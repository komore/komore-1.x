import { notionDomain } from '@komore/notion';
import { createQueryType, queryProperties } from '@komore/query';

import { type GetBotUserNotionQueryResult } from './query/get-bot-user-notion-query-result';
import { type GetPageNotionQueryParameters } from './query/get-page-notion-query-parameters';
import { type GetPageNotionQueryResult } from './query/get-page-notion-query-result';
import { type GetUsersNotionQueryParameters } from './query/get-users-notion-query-parameters';
import { type GetUsersNotionQueryResult } from './query/get-users-notion-query-result';

/**
 * Notion query
 */
export const notionQuery = createQueryType(notionDomain, {
  /**
   * Returns the Notion user associated with the API token
   *
   * @see {@link https://developers.notion.com/reference/get-self Retrieve your token's bot user}
   */
  getBotUser: queryProperties<GetBotUserNotionQueryResult>(),
  /**
   * Returns a Notion page
   *
   * @see {@link https://developers.notion.com/reference/retrieve-a-page Retrieve a page}
   */
  getPage: queryProperties<GetPageNotionQueryResult, GetPageNotionQueryParameters>(),
  /**
   * Returns the list of Notion users
   *
   * @see {@link https://developers.notion.com/reference/get-users List all users}
   * @note Requires a `Read user information` capability
   */
  getUsers: queryProperties<GetUsersNotionQueryResult, GetUsersNotionQueryParameters>(),
});
