import { type GraphQLClient } from '@komore/graphql/client';

import { type gitLabGraphQLSchema } from './gitlab-graphql-schema';

/**
 * GitLab API client
 */
export type GitLabApiClient = GraphQLClient<typeof gitLabGraphQLSchema>;
