import { type ChangeLogItem } from '../item/change-log-item';

/**
 * Change log category
 */
export interface ChangeLogCategory {
  /**
   * Items
   */
  readonly items: ReadonlyArray<ChangeLogItem>;
  /**
   * Category name
   */
  readonly name: string;
}
