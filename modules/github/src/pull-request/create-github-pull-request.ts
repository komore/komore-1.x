import { map } from '@komore/reactive';

import { type GitHubApiClient } from '../github-api-client';

import { type GitHubCommandEventHandler } from '../github-command-event-handler';

/**
 * Creates a function that creates a GitHub pull request
 *
 * @param apiClient GitHub API client
 * @returns Function that creates a GitHub pull request
 */
export function createGitHubPullRequest(apiClient: GitHubApiClient): GitHubCommandEventHandler<'createPullRequest'> {
  /**
   * Creates a GitHub pull request
   *
   * @param pullRequest GitHub pull request
   * @returns Created GitHub pull request
   */
  return () => apiClient('createPullRequest', {}).pipe(map(x => x));
}
