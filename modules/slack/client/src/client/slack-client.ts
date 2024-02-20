import { type Client } from '@komore/client';

import { type slackCommand } from '../slack.command';
import { type slackError } from '../slack.error';
import { type slackEvent } from '../slack.event';
import { type slackQuery } from '../slack.query';
import { type slackClientCommandEventMap } from './slack-client-command-event-map';

/**
 * Slack client
 */
export type SlackClient = Client<
  typeof slackCommand,
  typeof slackEvent,
  typeof slackQuery,
  typeof slackError,
  typeof slackClientCommandEventMap
>;
