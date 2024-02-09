import { type graphQLTokenKinds } from './graphql-token-kinds';

/**
 * GraphQL token kind
 */
export type GraphQLTokenKind = (typeof graphQLTokenKinds)[keyof typeof graphQLTokenKinds];
