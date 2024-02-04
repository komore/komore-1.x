import { createClientCommandEventMap } from '@komore/client';

import { type gitHubCommand } from '../github.command';
import { type gitHubEvent } from '../github.event';

/**
 * GitHub client command-to-event map
 */
export const gitHubClientCommandEventMap = createClientCommandEventMap<
  (typeof gitHubCommand)[keyof typeof gitHubCommand],
  (typeof gitHubEvent)[keyof typeof gitHubEvent]
>()({
  closePullRequest: 'pullRequestClosed',
  createPullRequest: 'pullRequestCreated',
  mergePullRequest: 'pullRequestMerged',
});
