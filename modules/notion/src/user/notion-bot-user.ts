import { type UrlString } from '@komore/url';

import { type NotionUserId } from './id/notion-user-id';
import { type NotionBotInfo } from './notion-bot-info';
import { type NotionUserType } from './type/notion-user-type';

/**
 * Notion bot user
 */
export interface NotionBotUser {
  /**
   * Avatar URL
   */
  readonly avatar_url: UrlString | null;
  /**
   * Bot information
   */
  readonly bot: NotionBotInfo;
  /**
   * User identifier
   */
  readonly id: NotionUserId;
  /**
   * Bot name
   */
  readonly name: string;
  /**
   * Object type
   */
  readonly object: 'user';
  /**
   * User type
   */
  readonly type: Extract<NotionUserType, 'bot'>;
}
