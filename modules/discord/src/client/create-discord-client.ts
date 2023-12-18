import { createClient } from '@komore/client';

import { discordCommand } from '../discord.command';
import { discordError } from '../discord.error';
import { discordEvent } from '../discord.event';
import { discordQuery } from '../discord.query';
import { type DiscordClient } from './discord-client';
import { type DiscordClientOptions } from './discord-client-options';

/**
 * Creates a Discord client
 *
 * @param clientOptions Discord client options
 * @returns Discord client
 */
export function createDiscordClient(clientOptions: DiscordClientOptions): DiscordClient {
  const {} = clientOptions;
  return createClient({
    command: discordCommand,
    commandEventMap: discordCommandEventMap,
    commandHandler: events => createDiscordCommandHandler({ events }),
    error: discordError,
    event: discordEvent,
    query: discordQuery,
    queryHandler: () => createDiscordQueryHandler(),
  });
}
