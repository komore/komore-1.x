import { type QueryFromType, type QueryHandler } from '@komore/query';

import { type comprehendQuery } from '../comprehend.query';

/**
 * Comprehend query handler
 */
export type ComprehendQueryHandler = QueryHandler<QueryFromType<typeof comprehendQuery>>;
