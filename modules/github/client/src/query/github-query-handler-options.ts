import { type GitHubApiClient } from '../api/github-api-client';

/**
 * GitHub query handler options
 */
export interface GitHubQueryHandlerOptions {
  /**
   * GitHub API client
   */
  readonly apiClient$: Observable<GitHubApiClient>;
}
