import { type GraphQLToken } from './graphql-token';
import { graphQLTokenKinds } from './graphql-token-kinds';

/**
 * Creates a start of file GraphQL token
 */
export function createStartOfFileGraphQLToken(): GraphQLToken {
  return {
    kind: graphQLTokenKinds.StartOfFile,
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
