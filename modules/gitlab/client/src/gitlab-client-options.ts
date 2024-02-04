import { type GitLabApiClient } from '@komore/gitlab';

/**
 * GitLab client options
 */
export interface GitLabClientOptions {
  /**
   * GitLab API client
   */
  readonly apiClient: GitLabApiClient;
}
