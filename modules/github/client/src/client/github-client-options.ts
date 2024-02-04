import { type GitHubApiClient } from '@komore/github';

/**
 * GitHub client options
 */
export interface GitHubClientOptions {
  /**
   * GitHub API client
   */
  readonly apiClient: GitHubApiClient;
}
