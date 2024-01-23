import { type QueryFromType, type QueryHandler } from '@komore/query';

import { type discordQuery } from '../discord.query';

/**
 * Discord query handler
 */
export type DiscordQueryHandler = QueryHandler<QueryFromType<typeof discordQuery>>;
