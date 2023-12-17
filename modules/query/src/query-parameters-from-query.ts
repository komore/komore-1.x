import { type GenericQuery } from './generic-query';

/**
 * Query parameters from a query type
 *
 * @template QueryType Query type
 */
export type QueryParametersFromQuery<QueryType extends GenericQuery> = QueryType['parameters'];
