import { createErrorType } from '@komore/error';

import { discordDomain } from '@komore/discord';

/**
 * Discord error
 */
export const discordError = createErrorType(discordDomain, {});
