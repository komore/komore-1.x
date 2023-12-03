import { type CosmosDbClient } from '@komore/azure/cosmos-db';

/**
 * Cosmos DB event repository options
 */
export interface CosmosDbEventRepositoryOptions {
  /**
   * Cosmos DB client
   */
  readonly cosmosDbClient: CosmosDbClient;
}
