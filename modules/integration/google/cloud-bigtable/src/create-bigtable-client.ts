import type { BigtableOptions } from '@google-cloud/bigtable';
import { Bigtable } from '@google-cloud/bigtable';

/**
 * Creates a Bigtable client
 * @param options Options
 * @returns Bigtable client
 */
export function createBigTableClient(options?: BigtableOptions): Bigtable {
  return new Bigtable(options);
}

createBigTableClient().createInstance()