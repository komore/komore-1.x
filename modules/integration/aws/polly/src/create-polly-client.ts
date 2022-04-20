import { PollyClient, type PollyClientConfig } from '@aws-sdk/client-polly';

/**
 * Creates a Polly client
 *
 * @param configuration Configuration
 * @returns Polly client
 */
export function createPollyClient(configuration?: PollyClientConfig): PollyClient {
  return new PollyClient(configuration ?? {});
}
