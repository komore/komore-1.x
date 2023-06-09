import { type ComprehendClient } from '@aws-sdk/client-comprehend';
import { withAwsClient } from '@komore/integration-aws';
import { createComprehendClient } from '../create-comprehend-client';

/**
 * Adds a Comprehend client to a message
 *
 * @param comprehendClient Comprehend client
 * @returns Operator function that turns a message into a message with a Comprehend client
 */
export const withComprehendClient = (comprehendClient?: ComprehendClient) =>
  withAwsClient('comprehend', comprehendClient ?? createComprehendClient());
