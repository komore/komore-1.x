import { type GraphQLClient } from './graphql-client';
import { type GraphQLClientOptions } from './graphql-client-options';

/**
 * Creates a GraphQL client
 *
 * @param clientOptions GraphQL client options
 * @returns GraphQL client
 * @template SchemaType Schema type
 */
export function createGraphQLClient<SchemaType>(
  clientOptions: GraphQLClientOptions<SchemaType>
): GraphQLClient<SchemaType> {
  const { endpointUrl: _1, httpClient: _2 } = clientOptions;
  return {};
}
