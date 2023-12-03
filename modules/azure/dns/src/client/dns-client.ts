import { type DnsManagementClient } from '@azure/arm-dns';

/**
 * DNS client
 */
export interface DnsClient {
  readonly client: DnsManagementClient;
}
