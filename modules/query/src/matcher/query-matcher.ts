import { type Query } from '../query';
import { type QueryMatcherCase } from './query-matcher-case';

/**
 * Query matcher
 *
 * @template QueryType Possible query types
 * @template ResultType Result type
 */
export type QueryMatcher<QueryType extends Query, ResultType = void> = {
  [QueryName in QueryType['name']]: QueryMatcherCase<Extract<QueryType, { name: QueryName }>, ResultType>;
};
