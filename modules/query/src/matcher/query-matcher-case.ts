import { type GenericQuery } from '../generic-query';

/**
 * Query matcher case
 */
export interface QueryMatcherCase<QueryType extends GenericQuery, ResultType> {
  (parameters: QueryType['parameters'], query: QueryType): ResultType;
}
