import { DnsManagementClient } from '@azure/arm-dns';
import { ServiceClientCredentials } from '@azure/ms-rest-js';

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
  credentials?: ServiceClientCredentials,
  subscriptionId?: string,
  options?: DnsManagementClientOptions
): DnsManagementClient {
  // TODO: get from env vars
  return new DnsManagementClient(credentials, subscriptionId, options);
}
