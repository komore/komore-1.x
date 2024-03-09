import { type Neo4jApiClient } from '../neo4j-api-client';

/**
 * Neo4j session options
 */
export interface Neo4jSessionOptions {
  /**
   * API client
   */
  readonly apiClient: Neo4jApiClient;
}
