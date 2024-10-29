import { type Query } from './query';

/**
 * Query name
 *
 * @template QueryType Query type
 */
export type QueryName<QueryType extends Query> = QueryType extends Query ? QueryType['name'] : never;
