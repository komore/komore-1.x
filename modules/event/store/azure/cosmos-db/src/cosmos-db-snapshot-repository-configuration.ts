import type { CosmosClient } from '@azure/cosmos';

/**
 * Cosmos DB snapshot repository configuration
 */
export interface CosmosDBSnapshotRepositoryConfiguration {
  readonly cosmosDBClient?: CosmosClient;
}
