import type { CosmosClient } from '@azure/cosmos';
import { withAzureClient } from '@komore/integration-azure';
import { createCosmosDBClient } from './create-cosmos-db-client';

/**
 * Adds a Cosmos DB client to a message
 * @param cosmosDBClient Cosmos DB client
 * @returns Operator function that turns a message into a message with a Cosmos DB client
 */
export const withCosmosDBClient = (cosmosDBClient?: CosmosClient) =>
  withAzureClient('cosmosdb', cosmosDBClient ?? createCosmosDBClient());
