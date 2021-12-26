import { type Database } from '@azure/cosmos';
import { type CosmosDBClient } from './cosmos-db-client';

export function getCosmosDBDatabase(cosmosDbClient: CosmosDBClient, databaseId: string): Database {
  return cosmosDbClient.database(databaseId);
}
