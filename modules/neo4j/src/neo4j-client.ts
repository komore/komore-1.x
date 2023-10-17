import { type Driver } from 'neo4j-driver';

import { type Logger } from '@komore/logging';

/**
 * Neo4j client
 */
export interface Neo4jClient {
  /**
   * Database name
   */
  readonly databaseName: string;
  /**
   * Neo4j driver
   */
  readonly driver: Driver;
  /**
   * Logger
   */
  readonly logger: Logger;
}
