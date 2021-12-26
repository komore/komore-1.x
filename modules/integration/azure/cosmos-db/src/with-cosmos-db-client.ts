import { withAzureClient } from '@komore/integration-azure';
import { type CosmosDBClient } from './cosmos-db-client';
import { createCosmosDBClient } from './create-cosmos-db-client';

/**
 * Adds a Cosmos DB client to a message
 * @param cosmosDBClient Cosmos DB client
 * @returns Operator function that turns a message into a message with a Cosmos DB client
 */
export const withCosmosDBClient = (cosmosDBClient?: CosmosDBClient) =>
  withAzureClient('cosmosdb', cosmosDBClient ?? createCosmosDBClient());
