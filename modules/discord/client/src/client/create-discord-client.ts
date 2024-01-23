import { createClient } from '@komore/client';

import { createDiscordCommandHandler } from '../command/create-discord-command-handler';
import { discordCommand } from '../discord.command';
import { discordError } from '../discord.error';
import { discordEvent } from '../discord.event';
import { discordQuery } from '../discord.query';
import { createDiscordQueryHandler } from '../query/create-discord-query-handler';
import { type DiscordClient } from './discord-client';
import { type DiscordClientOptions } from './discord-client-options';
import { discordCommandEventMap } from './discord-command-event-map';

/**
 * Creates a Discord client
 *
 * @param clientOptions Discord client options
 * @returns Discord client
 */
export function createDiscordClient(clientOptions: DiscordClientOptions): DiscordClient {
  const { apiClient } = clientOptions;
  return createClient({
    command: discordCommand,
    commandEventMap: discordCommandEventMap,
    commandHandler: toEvents => createDiscordCommandHandler({ apiClient, toEvents }),
    error: discordError,
    event: discordEvent,
    query: discordQuery,
    queryHandler: () => createDiscordQueryHandler({ apiClient }),
  });
}
