import { type GitRevisionRange } from '../revision/git-revision-range';
import { type ListGitCommitsOptionsFilters } from './list-git-commits-options-filters';

/**
 * List Git commits options
 *
 * @see {@link https://git-scm.com/docs/git-log git log}
 */
export interface ListGitCommitsOptions {
  /**
   * Filters
   */
  readonly filters?: ListGitCommitsOptionsFilters;
  /**
   * Range
   */
  readonly range?: GitRevisionRange;
}
