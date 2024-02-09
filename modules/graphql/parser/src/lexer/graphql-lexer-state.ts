import { type GraphQLToken } from '../token/graphql-token';

/**
 * GraphQL lexer state
 */
export interface GraphQLLexerState {
  readonly currentToken: GraphQLToken;
  readonly lastToken?: GraphQLToken;
  readonly line: number;
  readonly lineStart: number;
}
