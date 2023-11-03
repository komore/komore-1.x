import { type GenericQuery } from './generic-query';

/**
 * Query name
 *
 * @template QueryType Query type
 */
export type QueryName<QueryType extends GenericQuery> = QueryType extends GenericQuery ? QueryType['name'] : never;
