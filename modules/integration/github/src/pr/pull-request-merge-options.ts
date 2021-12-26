import { type GithubMergeMethod } from '../github-merge-method';

/**
 * Pull request merge options
 */
export interface PullRequestMergeOptions {
  /**
   * Automatic commit message title
   */
  readonly automaticCommitTitle: string;
  /**
   * Automatic commit message detail
   */
  readonly automaticCommitMessage: string;
  /**
   * SHA the pull request head must match to allow the merge
   */
  readonly pullRequestHeadSHA: string;
  /**
   * Merge method to use (defaults to merge)
   */
  readonly mergeMethod: GithubMergeMethod;
}
