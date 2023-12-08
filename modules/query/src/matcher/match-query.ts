import { type QueryName } from '../query-name';
import { type GenericQuery } from '../generic-query';
import { type QueryMatcher } from './query-matcher';
import { type QueryMatcherCase } from './query-matcher-case';

/**
 * Matches a query, branching based on the query type
 *
 * @param query Query
 * @param matcher Matcher
 * @returns Matcher result
 * @template QueryType Query type
 * @template ResultType Result type
 */
export function matchQuery<QueryType extends GenericQuery, ResultType>(
  query: QueryType,
  matcher: QueryMatcher<QueryType, ResultType>
): ResultType {
  const { name, parameters } = query;
  const handler = matcher[name as QueryName<QueryType>] as QueryMatcherCase<QueryType, ResultType>;
  return handler(parameters, query);
}
