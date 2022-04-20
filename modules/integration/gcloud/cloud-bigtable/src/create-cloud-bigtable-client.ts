import { Bigtable, type BigtableOptions } from '@google-cloud/bigtable';
import { type CloudBigtableClient } from './cloud-bigtable-client';

/**
 * Creates a Cloud Bigtable client
 *
 * @param options Options
 * @returns Cloud Bigtable client
 */
export function createCloudBigtableClient(options?: BigtableOptions): CloudBigtableClient {
  const client = new Bigtable(options);
  return {
    client,
  };
}
