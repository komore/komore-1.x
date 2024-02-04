import { type GraphQLSchema } from '@komore/graphql/schema';

/**
 * GitHub GraphQL schema
 *
 * @private
 */
export const gitHubGraphQLSchema = {
  Mutation: {},
  Query: {},
  Subscription: {},
  Types: {},
} as const satisfies GraphQLSchema;
