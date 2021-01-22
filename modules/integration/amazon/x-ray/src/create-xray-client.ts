import type { XRayClientConfig } from '@aws-sdk/client-xray';
import { XRayClient } from '@aws-sdk/client-xray';

/**
 * Creates an X-Ray client
 * @param configuration Configuration
 * @returns X-Ray client
 */
export function createXRayClient(configuration?: XRayClientConfig): XRayClient {
  return new XRayClient(configuration ?? {});
}
