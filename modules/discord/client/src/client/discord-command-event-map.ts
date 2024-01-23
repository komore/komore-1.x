import { createClientCommandEventMap } from '@komore/client';

import { type discordCommand } from '../discord.command';
import { type discordEvent } from '../discord.event';

/**
 * Discord command-to-event map
 */
export const discordCommandEventMap = createClientCommandEventMap<typeof discordCommand, typeof discordEvent>()({});
