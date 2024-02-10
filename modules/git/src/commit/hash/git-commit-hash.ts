/**
 * Git commit hash
 */
export type GitCommitHash = ('HEAD' | string) & {
  readonly __tag_gitCommitHash: unique symbol;
};
