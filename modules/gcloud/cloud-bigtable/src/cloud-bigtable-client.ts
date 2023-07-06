import { type Bigtable } from '@google-cloud/bigtable';

/**
 * Cloud Bigtable client
 */
export interface CloudBigtableClient {
  /**
   * Client
   */
  readonly client: Bigtable;
}
