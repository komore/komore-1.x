import { type Query } from './query';

/**
 * Query result from a query
 *
 * @template QueryType Query type
 */
export type QueryResultFromQuery<QueryType extends Query> = ReturnType<QueryType>;
