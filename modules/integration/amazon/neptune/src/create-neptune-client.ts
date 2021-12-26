import { NeptuneClient, type NeptuneClientConfig } from '@aws-sdk/client-neptune';

/**
 * Creates an Neptune client
 * @param configuration Configuration
 * @returns Neptune client
 */
export function createNeptuneClient(configuration?: NeptuneClientConfig): NeptuneClient {
  return new NeptuneClient(configuration ?? {});
}
