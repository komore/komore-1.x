import { Client } from 'discord.js';

import { type DiscordClient } from './discord-client';
import { type DiscordClientOptions } from './discord-client-options';

/**
 * Creates a Discord client
 *
 * @param options Discord client options
 * @returns Discord client
 */
export function createDiscordClient(options: DiscordClientOptions): DiscordClient {
  return new Client(options);
}
