import { type CosmosDbClient } from '@komore/azure/cosmos-db';
import { type Logger } from '@komore/logging';

/**
 * Cosmos DB snapshot repository options
 */
export interface CosmosDbSnapshotRepositoryOptions {
  /**
   * Cosmos DB client
   */
  readonly cosmosDbClient: CosmosDbClient;
  /**
   * Logger
   */
  readonly logger: Logger;
}
