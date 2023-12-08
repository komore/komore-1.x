import { type GenericQuery } from '../generic-query';
import { type QueryMatcherCase } from './query-matcher-case';

/**
 * Query matcher
 *
 * @template QueryType Possible query types
 * @template ResultType Result type
 */
export type QueryMatcher<QueryType extends GenericQuery, ResultType = void> = {
  [QueryName in QueryType['name']]: QueryMatcherCase<Extract<QueryType, { name: QueryName }>, ResultType>;
};
