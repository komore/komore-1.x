/**
 * Pull request merge result
 */
export interface PullRequestMergeResult {
  readonly sha: string;
  readonly merged: boolean;
  readonly message: string;
}
