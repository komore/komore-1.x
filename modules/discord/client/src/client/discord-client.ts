import { type Client } from '@komore/client';

import { type discordCommand } from '../discord.command';
import { type discordEvent } from '../discord.event';
import { type discordQuery } from '../discord.query';
import { type discordError } from '../discord.error';
import { type discordCommandEventMap } from './discord-command-event-map';

/**
 * Discord client
 */
export type DiscordClient = Client<
  typeof discordCommand,
  typeof discordEvent,
  typeof discordQuery,
  typeof discordError,
  typeof discordCommandEventMap
>;
