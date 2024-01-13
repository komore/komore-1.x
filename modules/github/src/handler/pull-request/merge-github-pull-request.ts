import { map } from '@komore/reactive';

import { type GitHubApiClient } from '../../api/github-api-client';
import { gitHubEvent } from '../../github.event';
import { type GitHubCommandEventHandler } from '../github-command-event-handler';

/**
 * Merges a merge GitHub pull request command-event handler
 *
 * @param apiClient GitHub API client
 * @returns Merge GitHub pull request command-event handler
 * @private
 */
export function mergeGitHubPullRequest(apiClient: GitHubApiClient): GitHubCommandEventHandler<'mergePullRequest'> {
  return () => apiClient('mergePullRequest', {}).pipe(map(gitHubEvent.pullRequests.pullRequestMerged));
}
