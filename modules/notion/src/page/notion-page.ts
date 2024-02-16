import { type DateTimeString } from '@komore/temporal';
import { type ReadonlyRecord } from '@komore/typescript';
import { type UrlString } from '@komore/url';

import { type NotionObjectReference } from '../object/notion-object-reference';
import { type NotionPageCover } from './cover/notion-page-cover';
import { type NotionPageIcon } from './icon/notion-page-icon';
import { type NotionPageId } from './id/notion-page-id';
import { type NotionPageParent } from './parent/notion-page-parent';

/**
 * Notion page
 */
export interface NotionPage {
  /**
   * Whether the page is archived
   */
  readonly archived: boolean;
  /**
   * Cover
   */
  readonly cover: NotionPageCover | null;
  /**
   * Icon
   */
  readonly icon: NotionPageIcon | null;
  /**
   * Created by
   */
  readonly created_by: NotionObjectReference;
  /**
   * Created time
   */
  readonly created_time: DateTimeString;
  /**
   * Notion page identifier
   */
  readonly id: NotionPageId;
  /**
   * Last edited by
   */
  readonly last_edited_by: NotionObjectReference;
  /**
   * Last edited time
   */
  readonly last_edited_time: DateTimeString;
  /**
   * Object type
   */
  readonly object: 'page';
  /**
   * Parent
   */
  readonly parent: NotionPageParent;
  /**
   * Properties
   */
  readonly properties: ReadonlyRecord<string, unknown>;
  /**
   * Public URL
   */
  readonly public_url: UrlString | null;
  /**
   * URL
   */
  readonly url: UrlString;
}
