import { createClientCommandEventMap } from '@komore/client';

import { type gitHubCommand } from '../github.command';
import { type gitHubEvent } from '../github.event';

/**
 * GitHub command-to-event map
 */
export const gitHubCommandEventMap = createClientCommandEventMap<
  (typeof gitHubCommand)[keyof typeof gitHubCommand],
  (typeof gitHubEvent)[keyof typeof gitHubEvent]
>()({
  closePullRequest: 'pullRequestClosed',
  createPullRequest: 'pullRequestCreated',
  mergePullRequest: 'pullRequestMerged',
});
