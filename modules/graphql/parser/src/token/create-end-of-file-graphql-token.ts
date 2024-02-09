import { type GraphQLToken } from './graphql-token';
import { graphQLTokenKinds } from './graphql-token-kinds';

/**
 * Creates an end of file GraphQL token
 */
export function createEndOfFileGraphQLToken(): GraphQLToken {
  return {
    kind: graphQLTokenKinds.EndOfFile,
    location: {
      line: 0,
      column: 0,
    },
    position: {
      start: 0,
      end: 0,
    },
    siblings: {},
  };
}
