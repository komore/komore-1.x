import type { RDSDataClientConfig } from '@aws-sdk/client-rds-data';
import { RDSDataClient } from '@aws-sdk/client-rds-data';

/**
 * Creates an Aurora client
 * @param configuration Configuration
 * @returns Aurora client
 */
export function createAuroraClient(configuration?: RDSDataClientConfig): RDSDataClient {
  return new RDSDataClient(configuration ?? {});
}
