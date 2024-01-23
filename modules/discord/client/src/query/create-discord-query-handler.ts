import { matchQuery } from '@komore/query';

import { type DiscordQueryHandler } from './discord-query-handler';
import { type DiscordQueryHandlerOptions } from './discord-query-handler-options';

/**
 * Creates a Discord query handler
 *
 * @param handlerOptions Discord query handler options
 * @returns Discord query handler
 */
export function createDiscordQueryHandler(handlerOptions: DiscordQueryHandlerOptions): DiscordQueryHandler {
  const { apiClient } = handlerOptions;
  return query => matchQuery(query, {});
}
