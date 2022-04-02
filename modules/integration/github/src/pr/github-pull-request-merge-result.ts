/**
 * GitHub pull request merge result
 */
export interface GithubPullRequestMergeResult {
  readonly sha: string;
  readonly merged: boolean;
  readonly message: string;
}
