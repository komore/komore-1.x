import { type ListGitBranchesOptionsFilters } from './list-git-branches-options-filters';

/**
 * List Git branches options
 */
export interface ListGitBranchesOptions {
  /**
   * Filters
   */
  readonly filters?: Partial<ListGitBranchesOptionsFilters>;
  /**
   * Whether to list remote branches instead of local ones
   *
   * @note Defaults to `false`
   */
  readonly remote?: boolean;
}
