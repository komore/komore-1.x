import { DnsManagementClient, type DnsManagementClientOptionalParams } from '@azure/arm-dns';
import { type TokenCredential } from '@azure/core-auth';

import { type DnsClient } from './dns-client';
import { type DnsClientOptions } from './dns-client-options';

/**
 * Creates a DNS client
 *
 * @param clientOptions DNS client options
 * @returns DNS client
 */
export function createDnsClient(clientOptions: DnsClientOptions): DnsClient {
  const {} = clientOptions;
  const credentials = void 0 as unknown as TokenCredential;
  const options = void 0 as unknown as DnsManagementClientOptionalParams;
  const subscriptionId = '';
  const client = new DnsManagementClient(credentials, subscriptionId, options);
  return { client };
}
