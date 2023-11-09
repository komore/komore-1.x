import { type CosmosClientOptions } from '@azure/cosmos';

import { type AzureClientOptions } from '@komore/azure';

/**
 * Cosmos DB client options
 */
export interface CosmosDbClientOptions extends AzureClientOptions<CosmosClientOptions> {}
