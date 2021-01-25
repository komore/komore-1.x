import type { Bigtable } from '@google-cloud/bigtable';
import { withGoogleCloudClient } from '@komore/integration-google';
import { createBigTableClient } from '../create-bigtable-client';

/**
 * TODO
 * @param bigtableClient Bigtable client
 */
export const withBigtableClient = (bigtableClient?: Bigtable) =>
  withGoogleCloudClient('bigtable', bigtableClient ?? createBigTableClient());
