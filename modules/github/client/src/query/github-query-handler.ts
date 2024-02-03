import { type QueryFromType, type QueryHandler } from '@komore/query';

import { type gitHubQuery } from '../github.query';

/**
 * GitHub query handler
 */
export type GitHubQueryHandler = QueryHandler<QueryFromType<typeof gitHubQuery>>;
