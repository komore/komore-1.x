import { type GenericQueryType } from './type/generic-query-type';

/**
 * Query properties from a query type
 *
 * @template QueryType Query type
 */
export type QueryPropertiesFromType<QueryType extends GenericQueryType> = ReturnType<QueryType>;
