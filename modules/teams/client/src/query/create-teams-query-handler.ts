import { matchQuery } from '@komore/query';

import { type TeamsQueryHandler } from './teams-query-handler';
import { type TeamsQueryHandlerOptions } from './teams-query-handler-options';

/**
 * Creates a Teams query handler
 *
 * @param handlerOptions Teams query handler options
 * @returns Teams query handler
 */
export function createTeamsQueryHandler(handlerOptions: TeamsQueryHandlerOptions): TeamsQueryHandler {
  const { apiClient: _ } = handlerOptions;
  return query => matchQuery(query, {});
}
