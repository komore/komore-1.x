import { type UrlString } from '@komore/url';

/**
 * Notion page external icon
 */
export interface NotionPageExternalIcon {
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
