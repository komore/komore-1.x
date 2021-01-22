import type { PollyClientConfig } from '@aws-sdk/client-polly';
import { PollyClient } from '@aws-sdk/client-polly';

/**
 * Creates an Polly client
 * @param configuration Configuration
 * @returns Polly client
 */
export function createPollyClient(configuration?: PollyClientConfig): PollyClient {
  return new PollyClient(configuration ?? {});
}
