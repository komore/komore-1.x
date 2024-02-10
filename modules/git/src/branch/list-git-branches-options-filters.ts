import { type GitCommitHash } from '../commit/hash/git-commit-hash';

/**
 * List Git branches options filters
 */
export interface ListGitBranchesOptionsFilters {
  /**
   * Only list branches which contain the specified commit
   */
  readonly contains: GitCommitHash;
  /**
   * Only list branches whose tips are reachable from the specified commit
   */
  readonly merged: GitCommitHash;
  /**
   * Only list branches which don't contain the specified commit
   */
  readonly noContains: GitCommitHash;
  /**
   * Only list branches whose tips are not reachable from the specified commit
   */
  readonly noMerged: GitCommitHash;
}
