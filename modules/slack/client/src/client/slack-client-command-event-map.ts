import { createClientCommandEventMap } from '@komore/client';
import { type CommandFromType } from '@komore/command';
import { type EventFromType } from '@komore/event';

import { type slackCommand } from '../slack.command';
import { type slackEvent } from '../slack.event';

/**
 * Slack client command-to-event map
 */
export const slackClientCommandEventMap = createClientCommandEventMap<
  CommandFromType<typeof slackCommand>,
  EventFromType<typeof slackEvent>
>()({});
