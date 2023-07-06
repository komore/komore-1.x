import { CosmosClient, type CosmosClientOptions } from '@azure/cosmos';
import { type CosmosDBClient } from './cosmos-db-client';

/**
 * Environment variables
 */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      KMR_INTEGRATION_AZURE_COSMOSDB_APIKEY: string;
      KMR_INTEGRATION_AZURE_COSMOSDB_ENDPOINT: string;
    }
  }
}

/**
 * Creates a Cosmos DB client
 * @param endpointUrl Endpoint URL
 * @param options Options
 * @returns Cosmos DB client
 */
export function createCosmosDBClient(
  endpointUrl?: string,
  options?: Omit<CosmosClientOptions, 'endpoint'>
): CosmosDBClient {
  return new CosmosClient({
    ...options,
    endpoint: endpointUrl ?? process.env.KMR_INTEGRATION_AZURE_COSMOSDB_ENDPOINT,
    key: options?.key ?? process.env.KMR_INTEGRATION_AZURE_COSMOSDB_APIKEY
  });
}
