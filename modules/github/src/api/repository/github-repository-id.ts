import { type GitHubNodeId } from '../node/github-node-id';

/**
 * GitHub repository identifier
 */
export type GitHubRepositoryId = GitHubNodeId & {
  readonly __tag_githubRepositoryId: unique symbol;
};
