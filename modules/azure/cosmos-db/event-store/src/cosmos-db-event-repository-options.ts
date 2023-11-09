import { type CosmosDbClient } from '@komore/azure/cosmos-db';
import { type Logger } from '@komore/logging';

/**
 * Cosmos DB event repository options
 */
export interface CosmosDbEventRepositoryOptions {
  /**
   * Cosmos DB client
   */
  readonly cosmosDbClient: CosmosDbClient;
  /**
   * Logger
   */
  readonly logger: Logger;
}
