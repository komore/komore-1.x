import { createQueryType } from '@komore/query';

import { discordDomain } from './discord.domain';

/**
 * Discord query
 */
export const discordQuery = createQueryType(discordDomain, {});
