import { matchQuery } from '@komore/query';

import { type SlackQueryHandlerOptions } from './slack-query-handler-options';

/**
 * Creates a Slack query handler
 *
 * @param handlerOptions Slack query handler options
 * @returns Slack query handler
 */
export function createSlackQueryHandler(handlerOptions: SlackQueryHandlerOptions): SlackQueryHandler {
  return query => matchQuery(query, {});
}
