import { createErrorType } from '@komore/error';

import { discordDomain } from './discord.domain';

/**
 * Discord error
 */
export const discordError = createErrorType(discordDomain, {});
