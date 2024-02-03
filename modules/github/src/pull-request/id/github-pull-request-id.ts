import { type GitHubNodeId } from '../../node/id/github-node-id';

/**
 * GitHub pull request identifier
 */
export type GitHubPullRequestId = GitHubNodeId & {
  readonly __tag_gitHubPullRequestId: unique symbol;
};
