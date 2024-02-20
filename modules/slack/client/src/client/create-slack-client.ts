import { createClient } from '@komore/client';

import { createSlackCommandHandler } from '../command/create-slack-command-handler';
import { createSlackQueryHandler } from '../query/create-slack-query-handler';
import { slackCommand } from '../slack.command';
import { slackError } from '../slack.error';
import { slackEvent } from '../slack.event';
import { slackQuery } from '../slack.query';
import { type SlackClient } from './slack-client';
import { slackClientCommandEventMap } from './slack-client-command-event-map';
import { type SlackClientOptions } from './slack-client-options';

/**
 * Creates a Slack client
 *
 * @param clientOptions Slack client options
 * @returns Slack client
 */
export function createSlackClient(clientOptions: SlackClientOptions): SlackClient {
  const { apiClient } = clientOptions;
  return createClient({
    command: slackCommand,
    commandEventMap: slackClientCommandEventMap,
    commandHandler: toEvents => createSlackCommandHandler({ apiClient, toEvents }),
    error: slackError,
    event: slackEvent,
    query: slackQuery,
    queryHandler: () => createSlackQueryHandler({ apiClient }),
  });
}
