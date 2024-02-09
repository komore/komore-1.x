/**
 * Git commit hash
 */
export type GitCommitHash = string & {
  readonly __tag_gitCommitHash: unique symbol;
};
