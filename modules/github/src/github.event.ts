import { gitHubPullRequestEvent } from './event/github-pull-request.event';

/**
 * GitHub event
 */
export const gitHubEvent = {
  pullRequests: gitHubPullRequestEvent,
} as const;
