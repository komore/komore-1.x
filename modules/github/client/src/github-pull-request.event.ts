import { createEventType, eventProperties } from '@komore/event';

import { gitHubDomain, type GitHubPullRequest } from '@komore/github';

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
