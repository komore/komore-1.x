/**
 * GitHub pull request merge result
 * @deprecated From REST API
 */
export interface GithubPullRequestMergeResult {
  readonly sha: string;
  readonly merged: boolean;
  readonly message: string;
}
