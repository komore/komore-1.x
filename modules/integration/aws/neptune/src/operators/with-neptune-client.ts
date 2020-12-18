import { NeptuneClient } from '@aws-sdk/client-neptune';
import { withAwsClient } from '@komore/integration-aws';

/**
 * Adds a Neptune client to a message
 * @param neptuneClient Neptune client
 * @returns Unary function that turns a message into a message with a Neptune client
 */
export const withNeptuneClient = (neptuneClient: NeptuneClient) =>
  withAwsClient('neptune', neptuneClient ?? new NeptuneClient({}));
