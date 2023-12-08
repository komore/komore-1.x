import { type GenericQueryType } from './type/generic-query-type';

/**
 * Query result from query type
 *
 * @template QueryType Query type
 */
export type QueryResultFromType<QueryType extends GenericQueryType> = ReturnType<QueryType>;
