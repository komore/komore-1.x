import { type UrlString } from '@komore/url';

import { type NotionUserId } from './id/notion-user-id';
import { type NotionPersonInfo } from './notion-person-info';
import { type NotionUserType } from './type/notion-user-type';

/**
 * Notion person user
 */
export interface NotionPersonUser {
  /**
   * Avatar URL
   */
  readonly avatar_url: UrlString | null;
  /**
   * User identifier
   */
  readonly id: NotionUserId;
  /**
   * Person name
   */
  readonly name: string;
  /**
   * Object type
   */
  readonly object: 'user';
  /**
   * Person information
   */
  readonly person: NotionPersonInfo;
  /**
   * User type
   */
  readonly type: Extract<NotionUserType, 'person'>;
}
