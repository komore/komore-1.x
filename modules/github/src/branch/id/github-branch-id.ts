import { type GitHubNodeId } from '../../node/id/github-node-id';

/**
 * GitHub branch identifier
 */
export type GitHubBranchId = GitHubNodeId & {
  readonly __tag_gitHubBranchId: unique symbol;
};
