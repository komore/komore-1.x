/**
 * GitHub branch name
 */
export type GitHubBranchName = string & {
  readonly __tag_githubBranchName: unique symbol;
};
