/**
 * GitHub node identifier
 */
export type GitHubNodeId = string & {
  readonly __tag_githubNodeId: unique symbol;
};
