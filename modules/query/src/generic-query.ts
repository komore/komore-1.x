import { type Query } from './query';
import { type GenericQueryType } from './type/generic-query-type';

/**
 * Generic query
 */
export type GenericQuery = Query<GenericQueryType, keyof GenericQueryType>;
