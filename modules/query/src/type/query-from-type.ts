import { type QueryFromCreator } from '../creator/query-from-creator';
import { type GenericQueryType } from './generic-query-type';

/**
 * Query from a query type
 *
 * @template QueryType Query type
 */
export type QueryFromType<QueryType extends GenericQueryType> = QueryFromCreator<QueryType[keyof QueryType & string]>;
