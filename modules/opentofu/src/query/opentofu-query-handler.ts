import { type QueryFromType, type QueryHandler } from '@komore/query';

import { type openTofuQuery } from '../opentofu.query';

/**
 * OpenTofu query handler
 */
export type OpenTofuQueryHandler = QueryHandler<QueryFromType<typeof openTofuQuery>>;
