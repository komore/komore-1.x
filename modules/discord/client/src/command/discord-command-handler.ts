import { type CommandFromType, type CommandHandler } from '@komore/command';

import { type discordCommand } from '../discord.command';

/**
 * Discord command handler
 */
export type DiscordCommandHandler = CommandHandler<CommandFromType<typeof discordCommand>>;
