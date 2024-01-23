import { type QueryFromType, type QueryHandler } from '@komore/query';

import { type eToroQuery } from '../etoro.query';

/**
 * eToro query handler
 */
export type EToroQueryHandler = QueryHandler<QueryFromType<typeof eToroQuery>>;
