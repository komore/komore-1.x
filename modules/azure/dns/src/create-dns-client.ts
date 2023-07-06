import { DnsManagementClient } from '@azure/arm-dns';
import { type ServiceClientCredentials } from '@azure/ms-rest-js';
import { type DnsClient } from './dns-client';

/**
 * DNS management client options
 * @note Not directly exported by `@azure/arm-dns`
 */
type DnsManagementClientOptions = NonNullable<ConstructorParameters<typeof DnsManagementClient>[2]>;

/**
 * Creates a DNS client
 * @param credentials Service client credentials
 * @param subscriptionId Subscription identifier
 * @param options Options
 * @returns DNS client
 */
export function createDnsClient(
  credentials: ServiceClientCredentials,
  subscriptionId: string,
  options?: DnsManagementClientOptions
): DnsClient {
  return new DnsManagementClient(credentials, subscriptionId, options);
}
