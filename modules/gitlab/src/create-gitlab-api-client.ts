import { createGraphQLClient } from '@komore/graphql/client';
import { createAuthorizationHttpHeader } from '@komore/http';
import { httpClientWithHttpHeaders } from '@komore/http/client';

import { type GitLabApiClient } from './gitlab-api-client';
import { type GitLabApiClientOptions } from './gitlab-api-client-options';
import { gitLabGraphQLSchema } from './gitlab-graphql-schema';

/**
 * Creates a GitLab API client
 *
 * @param clientOptions GitLab API client options
 * @returns GitLab API client
 */
export function createGitLabApiClient(clientOptions: GitLabApiClientOptions): GitLabApiClient {
  const { endpointUrl = new URL('https://gitlab.com/api/graphql'), token } = clientOptions;
  const authorizationHeader = createAuthorizationHttpHeader('Bearer', token);
  const httpClient = httpClientWithHttpHeaders([authorizationHeader])(clientOptions.httpClient);
  return createGraphQLClient({ endpointUrl, httpClient, schema: gitLabGraphQLSchema });
}
