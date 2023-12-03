import { type Neo4jClientCredentials } from './neo4j-client-credentials';

/**
 * Neo4j client options
 */
export interface Neo4jClientOptions {
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
