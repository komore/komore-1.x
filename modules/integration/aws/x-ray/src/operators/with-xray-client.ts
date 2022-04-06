import { type XRayClient } from '@aws-sdk/client-xray';
import { withAwsClient } from '@komore/integration-amazon';
import { createXRayClient } from '../create-xray-client';

/**
 * Adds a X-Ray client to a message
 * @param xRayClient X-Ray client
 * @returns Operator function that turns a message into a message with a X-Ray client
 */
export const withXRayClient = (xRayClient?: XRayClient) =>
  withAwsClient('xray', xRayClient ?? createXRayClient());
