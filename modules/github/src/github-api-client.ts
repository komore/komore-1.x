import { type GraphQLClient } from '@komore/graphql/client';

import { type gitHubGraphQLSchema } from './github-graphql-schema';

/**
 * GitHub API client
 */
export type GitHubApiClient = GraphQLClient<typeof gitHubGraphQLSchema>;
