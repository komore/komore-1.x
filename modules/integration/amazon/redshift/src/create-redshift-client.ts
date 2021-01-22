import type { RedshiftClientConfig } from '@aws-sdk/client-redshift';
import { RedshiftClient } from '@aws-sdk/client-redshift';

/**
 * Creates an Redshift client
 * @param configuration Configuration
 * @returns Redshift client
 */
export function createRedshiftClient(configuration?: RedshiftClientConfig): RedshiftClient {
  return new RedshiftClient(configuration ?? {});
}
