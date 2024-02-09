import { type QueryFromType, type QueryHandler } from '@komore/query';

import { type teamsQuery } from '../teams.query';

/**
 * Teams query handler
 */
export type TeamsQueryHandler = QueryHandler<QueryFromType<typeof teamsQuery>>;
