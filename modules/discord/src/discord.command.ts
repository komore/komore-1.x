import { createCommandType } from '@komore/command';

import { discordDomain } from './discord.domain';

/**
 * Discord command
 */
export const discordCommand = createCommandType(discordDomain, {});
