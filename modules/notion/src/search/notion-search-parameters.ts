import { type NotionObjectTypes } from '../object/notion-object-types';
import { type NotionSearchFilter } from './notion-search-filter';
import { type NotionSearchSortOptions } from './notion-search-sort-options';

/**
 * Notion search parameters
 */
export interface NotionSearchParameters<ObjectType extends keyof NotionObjectTypes> {
  /**
   * Search filter
   */
  readonly filter: NotionSearchFilter<ObjectType>;
  /**
   * Search query
   */
  readonly query: string;
  /**
   * Search sort options
   */
  readonly sort?: NotionSearchSortOptions;
}
