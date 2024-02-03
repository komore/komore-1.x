import { map, type Observable } from '@komore/reactive';

import { type GitHubApiClient } from '../github-api-client';

/**
 * Creates a function that merges a GitHub pull request
 *
 * @param apiClient GitHub API client
 * @returns Function that merges GitHub pull request
 */
export function mergeGitHubPullRequest(apiClient: GitHubApiClient): () => Observable<unknown> {
  /**
   * Merges a GitHub pull request
   *
   * @param
   * @returns
   */
  return () => apiClient('mergePullRequest', {}).pipe(map(x => x));
}
