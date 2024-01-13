import { type GitHubNodeId } from '../../node/github-node-id';

/**
 * GitHub pull request identifier
 */
export type GitHubPullRequestId = GitHubNodeId & {
  readonly __tag_githubPullRequestId: unique symbol;
};
