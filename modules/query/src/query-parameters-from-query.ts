import { type Query } from './query';

/**
 * Query parameters from a query type
 *
 * @template QueryType Query type
 */
export type QueryParametersFromQuery<QueryType extends Query> = QueryType['parameters'];
