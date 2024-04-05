import { type QueryFromType, type QueryHandler } from '@komore/query';

import { type route53Query } from '../route-53.query';

/**
 * Route 53 query handler
 */
export type Route53QueryHandler = QueryHandler<QueryFromType<typeof route53Query>>;
