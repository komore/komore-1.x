import { createClientCommandEventMap } from '@komore/client';

import { type teamsCommand } from '../teams.command';
import { type teamsEvent } from '../teams.event';

/**
 * Teams client command-to-event map
 */
export const teamsClientCommandEventMap = createClientCommandEventMap<
  (typeof teamsCommand)[keyof typeof teamsCommand],
  (typeof teamsEvent)[keyof typeof teamsEvent]
>()({
  closePullRequest: 'pullRequestClosed',
  createPullRequest: 'pullRequestCreated',
  mergePullRequest: 'pullRequestMerged',
});
