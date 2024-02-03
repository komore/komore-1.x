import { type GenericQuery } from './generic-query';

/**
 * Query handler
 *
 * @template QueryType Query type
 */
export interface QueryHandler<QueryType extends GenericQuery> {
  // TODO: response type based on the query type
  (query: QueryType): Observable<unknown>;
}
