import { type NotionPage } from '../page/notion-page';
import { type NotionDatabaseId } from './id/notion-database-id';

/**
 * Notion database
 */
export interface NotionDatabase extends Omit<NotionPage, 'id' | 'object'> {
  /**
   * Descriptions
   */
  readonly descriptions: ReadonlyArray<unknown>;
  /**
   * Notion database identifier
   */
  readonly id: NotionDatabaseId;
  /**
   * Whether the database is inline
   */
  readonly is_inline: boolean;
  /**
   * Object type
   */
  readonly object: 'database';
  readonly title: ReadonlyArray<{
    readonly type: 'text';
    readonly text: unknown;
    readonly annotations: unknown;
    readonly plain_text: string;
    readonly href: null;
  }>;
}
