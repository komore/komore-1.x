import { createEventType, eventProperties } from '@komore/event';

import { type GitHubPullRequest } from '../api/repository/pull-request/github-pull-request';
import { gitHubDomain } from '../github.domain';

/**
 * GitHub pull request event
 */
export const gitHubPullRequestEvent = createEventType(gitHubDomain, {
  /**
   * A pull request has been closed
   */
  pullRequestClosed: eventProperties<unknown>(),
  /**
   * A pull request has been created
   */
  pullRequestCreated: eventProperties<GitHubPullRequest>(),
  /**
   * A pull request has been merged
   */
  pullRequestMerged: eventProperties<unknown>(),
});
