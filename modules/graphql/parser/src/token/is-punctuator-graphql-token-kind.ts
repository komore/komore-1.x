import { type GraphQLTokenKind } from './graphql-token-kind';
import { graphQLTokenKinds } from './graphql-token-kinds';

/**
 * Tests whether a GraphQL token kind is a punctuator GraphQL token kind
 *
 * @param tokenKind GraphQL token kind
 * @returns true if the GraphQL token kind is a punctuator GraphQL token kind
 */
export function isPunctuatorGraphQLTokenKind(tokenKind: GraphQLTokenKind): boolean {
  return punctuatorGraphQLTokenKinds.has(tokenKind);
}

/**
 * Set of punctuator GraphQL token kinds
 *
 * @private
 */
const punctuatorGraphQLTokenKinds: ReadonlySet<GraphQLTokenKind> = new Set([
  graphQLTokenKinds.Ampersand,
  graphQLTokenKinds.At,
  graphQLTokenKinds.Bang,
  graphQLTokenKinds.Colon,
  graphQLTokenKinds.QuestionMark,
  graphQLTokenKinds.DollarSign,
  graphQLTokenKinds.Equal,
  graphQLTokenKinds.LeftBrace,
  graphQLTokenKinds.LeftBracket,
  graphQLTokenKinds.LeftParenthesis,
  graphQLTokenKinds.Pipe,
  graphQLTokenKinds.RightBrace,
  graphQLTokenKinds.RightBracket,
  graphQLTokenKinds.RightParenthesis,
  graphQLTokenKinds.Spread,
]);
