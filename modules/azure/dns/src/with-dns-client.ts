import { type CosmosClient } from '@azure/cosmos';
import { withAzureClient } from '@komore/integration-azure';

/**
 * Adds a DNS client to a message
 * @param dnsClient DNS client
 * @returns Operator function that turns a message into a message with a DNS client
 */
export const withDnsClient = (dnsClient?: CosmosClient) =>
  withAzureClient('dns', dnsClient);
