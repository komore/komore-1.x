import { type GraphQLQuery, type GraphQLResult } from '@komore/graphql';
import { type GraphQLSchema } from '@komore/graphql/schema';
import { createContentTypeHttpHeader } from '@komore/http';
import { httpClientResponseToJson } from '@komore/http/client';
import { mergeMap } from '@komore/reactive';

import { type GraphQLClientOptions } from './graphql-client-options';

/**
 * Creates a function that executes a GraphQL query
 *
 * @param clientOptions GraphQL API client options
 * @returns Function that executes a GraphQL query
 */
export function executeGraphQLQuery(
  clientOptions: Omit<GraphQLClientOptions<GraphQLSchema>, 'schema'>
): <T>(query: GraphQLQuery) => Observable<GraphQLResult<T>> {
  const { endpointUrl: url, httpClient } = clientOptions;
  const headers = [createContentTypeHttpHeader('application/json')];
  const method = 'POST';

  return <T>(query: GraphQLQuery) => {
    const body = JSON.stringify(query);
    return httpClient({ headers, method, url, options: { body } }).pipe(
      mergeMap(httpClientResponseToJson<GraphQLResult<T>>())
    );
  };
}
