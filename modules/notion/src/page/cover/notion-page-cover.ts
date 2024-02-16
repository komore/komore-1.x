import { type UrlString } from '@komore/url';

/**
 * Notion page cover
 */
export interface NotionPageCover {
  /**
   * External URL
   */
  readonly external: {
    readonly url: UrlString;
  };
  /**
   * Icon type
   */
  readonly type: 'external';
}
