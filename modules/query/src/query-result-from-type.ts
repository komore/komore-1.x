import { type GenericQueryType } from './type/generic-query-type';

/**
 * Query from query type
 */
export type QueryFromType<QueryType extends GenericQueryType> = ReturnType<QueryType>;
