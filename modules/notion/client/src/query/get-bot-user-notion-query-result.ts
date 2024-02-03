import { type NotionUser } from '@komore/notion';

/**
 * Get Bot User Notion query result
 */
export interface GetBotUserNotionQueryResult {
  /**
   * Bot user
   */
  readonly botUser: NotionUser;
}
