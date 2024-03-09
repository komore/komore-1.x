import { type Driver } from 'neo4j-driver';

/**
 * Neo4j API client
 */
export interface Neo4jApiClient {
  /**
   * Database name
   */
  readonly databaseName: string;
  /**
   * Neo4j driver
   */
  [neo4jApiClientSymbol]: Driver;
}

/**
 * Neo4j API client symbol
 *
 * @private
 */
export const neo4jApiClientSymbol = Symbol('@komore/neo4j:client');
