import type { LambdaClientConfig } from '@aws-sdk/client-lambda';
import { LambdaClient } from '@aws-sdk/client-lambda';

/**
 * Creates an Lambda client
 * @param configuration Configuration
 * @returns Lambda client
 */
export function createLambdaClient(configuration?: LambdaClientConfig): LambdaClient {
  return new LambdaClient(configuration ?? {});
}
