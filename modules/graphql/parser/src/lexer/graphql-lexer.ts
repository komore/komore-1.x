import { type GraphQLToken } from '../token/graphql-token';

/**
 * GraphQL lexer
 */
export interface GraphQLLexer {
  /**
   * Returns a stream of GraphQL tokens, given a GraphQL source
   */
  (source: string): Observable<GraphQLToken>;
}
