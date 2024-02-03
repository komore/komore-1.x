import { type GraphQLClient } from '@komore/graphql/client';

/**
 * GitHub API client
 */
export type GitHubApiClient = GraphQLClient<GitHubGraphQLSchema>;

interface GitHubGraphQLSchema {}
