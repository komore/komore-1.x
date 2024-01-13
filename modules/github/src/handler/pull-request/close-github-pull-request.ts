import { map } from '@komore/reactive';

import { type GitHubApiClient } from '../../api/github-api-client';
import { gitHubEvent } from '../../github.event';
import { type GitHubCommandEventHandler } from '../github-command-event-handler';

/**
 * Creates a close GitHub pull request command-event handler
 *
 * @param apiClient GitHub API client
 * @returns Close GitHub pull request command-event handler
 * @private
 */
export function closeGitHubPullRequest(apiClient: GitHubApiClient): GitHubCommandEventHandler<'closePullRequest'> {
  return ({ pullRequestId }) =>
    apiClient('closePullRequest', { pullRequestId }).pipe(map(gitHubEvent.pullRequests.pullRequestClosed));
}
