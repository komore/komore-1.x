import type { ComprehendClient } from '@aws-sdk/client-comprehend';
import { withAmazonClient } from '@komore/integration-amazon';
import { createComprehendClient } from '../create-comprehend-client';

/**
 * Adds a Comprehend client to a message
 * @param comprehendClient Comprehend client
 * @returns Operator function that turns a message into a message with a Comprehend client
 */
export const withComprehendClient = (comprehendClient?: ComprehendClient) =>
  withAmazonClient('comprehend', comprehendClient ?? createComprehendClient());
