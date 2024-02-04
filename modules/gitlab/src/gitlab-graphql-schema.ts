import { queryProperties } from '@komore/query';
import { type GraphQLSchema } from '@komore/graphql/schema';

/**
 * GitLab GraphQL schema
 *
 * @private
 */
export const gitLabGraphQLSchema = {
  Mutation: {},
  Query: {
    currentUser: queryProperties(),
  },
  Subscription: {},
  Types: {},
} as const satisfies GraphQLSchema;
