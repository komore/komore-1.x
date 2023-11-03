import { type GenericQuery } from '../generic-query';
import { type QueryMatcher } from './query-matcher';

/**
 * Matches a query, branching based on the query type
 *
 * @param query Query
 * @param matcher Matcher
 * @returns Matcher result
 * @template QueryType Query type
 * @template Result Result type
 */
export function matchQuery<QueryType extends GenericQuery, Result>(
  query: QueryType,
  matcher: QueryMatcher<QueryType, Result>
): Result {
  const { name } = query;
  const handler = matcher[name as keyof typeof matcher];
  return handler(query.parameters as Parameters<typeof handler>[0], query);
}
