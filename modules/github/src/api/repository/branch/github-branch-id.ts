import { type GitHubNodeId } from '../../node/github-node-id';

/**
 * GitHub branch identifier
 */
export type GitHubBranchId = GitHubNodeId & {
  readonly __tag_githubBranchId: unique symbol;
};
