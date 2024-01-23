import { createCommandType } from '@komore/command';

import { discordDomain } from '@komore/discord';

/**
 * Discord command
 */
export const discordCommand = createCommandType(discordDomain, {});
