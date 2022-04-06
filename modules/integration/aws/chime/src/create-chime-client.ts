import { ChimeClient, type ChimeClientConfig } from '@aws-sdk/client-chime';

/**
 * Creates a Chime client
 * @param configuration Configuration
 * @returns Chime client
 */
export function createChimeClient(configuration?: ChimeClientConfig) {
  return new ChimeClient(configuration ?? {});
}
