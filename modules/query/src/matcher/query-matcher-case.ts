import { type Query } from '../query';

/**
 * Query matcher case
 *
 * @template QueryType Query type
 * @template ResultType Result type
 */
export interface QueryMatcherCase<QueryType extends Query, ResultType> {
  (parameters: QueryType['parameters'], query: QueryType): ResultType;
}
