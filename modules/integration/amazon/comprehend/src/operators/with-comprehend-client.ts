import { ComprehendClient } from '@aws-sdk/client-comprehend';
import { withAwsClient } from '@komore/integration-aws';

/**
 * Adds a Comprehend client to a message
 * @param comprehendClient Comprehend client
 * @returns Operator function that turns a message into a message with a Comprehend client
 */
export const withComprehendClient = (comprehendClient?: ComprehendClient) =>
  withAwsClient('dynamodb', comprehendClient ?? new ComprehendClient({}));
