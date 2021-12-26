import { RedshiftDataClient, type RedshiftDataClientConfig } from '@aws-sdk/client-redshift-data';

/**
 * Creates an Redshift Data client
 * @param configuration Configuration
 * @returns Redshift Data client
 */
export function createRedshiftDataClient(configuration?: RedshiftDataClientConfig): RedshiftDataClient {
  return new RedshiftDataClient(configuration ?? {});
}
