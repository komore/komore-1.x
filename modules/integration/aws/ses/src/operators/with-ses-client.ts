import { SESClient } from '@aws-sdk/client-ses';
import { withAwsClient } from '@komore/integration-aws';

/**
 * Adds an SES client to a message
 * @param sesClient SES client
 * @returns Unary function that turns a message into a message with an SES client
 */
export const withSESClient = (sesClient: SESClient) =>
  withAwsClient('ses', sesClient ?? new SESClient({}), {});
