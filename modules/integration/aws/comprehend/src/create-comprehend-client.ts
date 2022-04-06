import { ComprehendClient, type ComprehendClientConfig } from '@aws-sdk/client-comprehend';

/**
 * Creates a Comprehend client
 * @param configuration Configuration
 * @returns Comprehend client
 */
export function createComprehendClient(configuration?: ComprehendClientConfig): ComprehendClient {
  return new ComprehendClient(configuration ?? {});
}
