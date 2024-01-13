import { type HttpClient } from '@komore/http/client';

/**
 * GraphQL client options
 */
export interface GraphQLClientOptions<_SchemaType> {
  /**
   * Endpoint URL
   */
  readonly endpointUrl: URL;
  /**
   * HTTP client
   */
  readonly httpClient: HttpClient;
}
