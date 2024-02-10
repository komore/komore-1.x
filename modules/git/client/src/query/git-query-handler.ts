import { type QueryFromType, type QueryHandler } from '@komore/query';

import { type gitQuery } from '../git.query';

/**
 * Git query handler
 */
export type GitQueryHandler = QueryHandler<QueryFromType<typeof gitQuery>>;
