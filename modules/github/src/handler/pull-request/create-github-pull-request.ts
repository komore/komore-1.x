import { map } from '@komore/reactive';

import { type GitHubApiClient } from '../../api/github-api-client';
import { gitHubEvent } from '../../github.event';
import { type GitHubCommandEventHandler } from '../github-command-event-handler';

/**
 * Creates a create GitHub pull request command-event handler
 *
 * @param apiClient GitHub API client
 * @returns Create GitHub pull request command-event handler
 * @private
 */
export function createGitHubPullRequest(apiClient: GitHubApiClient): GitHubCommandEventHandler<'createPullRequest'> {
  return () => apiClient('createPullRequest', {}).pipe(map(gitHubEvent.pullRequests.pullRequestCreated));
}
