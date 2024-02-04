import { type GraphQLSchema } from '@komore/graphql/schema';
import { type HttpClient } from '@komore/http/client';

/**
 * GraphQL client options
 *
 * @template Schema Schema type
 */
export interface GraphQLClientOptions<Schema extends GraphQLSchema> {
  /**
   * Endpoint URL
   */
  readonly endpointUrl: URL;
  /**
   * HTTP client
   */
  readonly httpClient: HttpClient;
  /**
   * Schema
   */
  readonly schema: Schema;
}
