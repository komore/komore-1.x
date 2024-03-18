import { type Query } from './query';

/**
 * Query handler
 *
 * @template QueryType Query type
 */
export interface QueryHandler<QueryType extends Query> {
  // TODO: response type based on the query type
  (query: QueryType): Observable<unknown>;
}
