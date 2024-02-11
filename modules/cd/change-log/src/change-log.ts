import { type ChangeLogCategory } from './category/change-log-category';

/**
 * Change log
 */
export interface ChangeLog {
  /**
   * Categories
   */
  readonly categories: ReadonlyArray<ChangeLogCategory>;
}
