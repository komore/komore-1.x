import { type CosmosDbClient } from '@komore/azure/cosmos-db';

/**
 * Cosmos DB snapshot repository options
 */
export interface CosmosDbSnapshotRepositoryOptions {
  /**
   * Cosmos DB client
   */
  readonly cosmosDbClient: CosmosDbClient;
}
