/**
 * Notion search sort options
 */
export interface NotionSearchSortOptions {
  /**
   * Sort direction
   */
  readonly direction: 'ascending' | 'descending';
  /**
   * Timestamp to sort against
   */
  readonly timestamp: 'last_edited_time';
}
