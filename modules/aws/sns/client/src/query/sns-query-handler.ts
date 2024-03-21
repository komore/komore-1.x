import { type QueryFromType, type QueryHandler } from '@komore/query';

import { type snsQuery } from '../sns.query';

/**
 * SNS query handler
 */
export type SnsQueryHandler = QueryHandler<QueryFromType<typeof snsQuery>>;
