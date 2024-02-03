import { gitHubPullRequestCommand } from './command/github-pull-request.command';

/**
 * GitHub command
 */
export const gitHubCommand = {
  pullRequests: gitHubPullRequestCommand,
} as const;
