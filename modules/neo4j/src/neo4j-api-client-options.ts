import { type Neo4jClientCredentials } from './neo4j-client-credentials';

/**
 * Neo4j API client options
 */
export interface Neo4jApiClientOptions {
  /**
   * Credentials
   */
  readonly credentials: Neo4jClientCredentials;
  /**
   * Database name
   */
  readonly databaseName: string;
  /**
   * Endpoint URL
   */
  readonly endpointUrl: URL;
}
