import { createGraphQLClient } from '@komore/graphql/client';

import { type GitHubApiClient } from './github-api-client';
import { type GitHubApiClientOptions } from './github-api-client-options';

/**
 * Creates a GitHub API client
 *
 * @param clientOptions GitHub API client options
 * @returns GitHub API client
 */
export function createGitHubApiClient(clientOptions: GitHubApiClientOptions): GitHubApiClient {
  const { apiToken: _, endpointUrl, httpClient } = clientOptions;
  // TODO: wrap httpClient with the API token
  return createGraphQLClient({ endpointUrl, httpClient });
}
