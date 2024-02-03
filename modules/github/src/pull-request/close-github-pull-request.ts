import { map, type Observable } from '@komore/reactive';

import { type GitHubApiClient } from '../github-api-client';
import { type GitHubPullRequest } from './github-pull-request';
import { type GitHubPullRequestId } from './id/github-pull-request-id';

/**
 * Creates a function that closes a GitHub pull request
 *
 * @param apiClient GitHub API client
 * @returns Function that closes a GitHub pull request
 */
export function closeGitHubPullRequest(
  apiClient: GitHubApiClient
): (pullRequestId: GitHubPullRequestId) => Observable<GitHubPullRequest> {
  /**
   * Closes a GitHub pull request
   *
   * @param pullRequestId GitHub pull request identifier
   * @returns Closed GitHub pull request
   */
  return pullRequestId => apiClient('closePullRequest', { pullRequestId }).pipe(map(result => result.pullRequest));
}
