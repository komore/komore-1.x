import { type NotionCursorTypes } from '../object/notion-cursor-types';
import { type NotionObjectTypes } from '../object/notion-object-types';

/**
 * Paginated Notion result
 */
export interface PaginatedNotionResult<Type extends keyof NotionObjectTypes & keyof NotionCursorTypes> {
  /**
   * Whether there are more items that could be returned
   */
  readonly has_more: boolean;
  /**
   * Next cursor, for use as `start_cursor` in later requests
   */
  readonly next_cursor?: NotionCursorTypes[Type];
  /**
   * Object type
   */
  readonly object: 'list';
  /**
   * Results
   */
  readonly results: ReadonlyArray<NotionObjectTypes[Type]>;
  /**
   * Type of the objects in `results`
   */
  readonly type: Type;
}
