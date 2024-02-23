import { createAwsClient } from '@komore/aws';

import { type AuroraClient } from './aurora-client';
import { type AuroraClientOptions } from './aurora-client-options';

/**
 * Creates an Aurora client
 *
 * @param clientOptions Aurora client options
 * @returns Aurora client
 */
export function createAuroraClient(clientOptions: AuroraClientOptions): AuroraClient {
  const { ...awsClientOptions } = clientOptions;
  return createAwsClient(awsClientOptions);
}
