/**
 * GitHub node identifier
 */
export type GitHubNodeId = string & {
  readonly __tag_gitHubNodeId: unique symbol;
};
