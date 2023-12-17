import { type GenericQuery } from './generic-query';

/**
 * Query result from a query
 *
 * @template QueryType Query type
 */
export type QueryResultFromQuery<QueryType extends GenericQuery> = ReturnType<QueryType>;
