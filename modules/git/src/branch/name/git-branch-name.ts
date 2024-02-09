/**
 * Git branch name
 */
export type GitBranchName = string & {
  readonly __tag_gitBranchName: unique symbol;
};
