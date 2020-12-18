import { ChimeClient } from '@aws-sdk/client-chime';
import { withAwsClient } from '@komore/integration-aws';

/**
 * Adds a Chime client to a message
 * @param chimeClient Chime client
 * @returns Operator function that turns a message into a message with a Chime client
 */
export const withChimeClient = (chimeClient: ChimeClient) =>
  withAwsClient('chime', chimeClient ?? new ChimeClient({}));
