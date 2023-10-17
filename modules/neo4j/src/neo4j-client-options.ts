import { type Logger } from '@komore/logging';

import { type Neo4jClientCredentials } from './neo4j-client-credentials';

/**
 * Neo4j client options
 */
export interface Neo4jClientOptions {
  /**
   * API endpoint URL
   */
  readonly apiEndpointUrl: URL;
  /**
   * Credentials
   */
  readonly credentials: Neo4jClientCredentials;
  /**
   * Database name
   */
  readonly databaseName: string;
  /**
   * Logger
   */
  readonly logger: Logger;
}
