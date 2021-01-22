import type { SESv2Client } from '@aws-sdk/client-sesv2';
import { withAwsClient } from '@komore/integration-amazon';
import { createSESClient } from '../create-ses-client';

/**
 * Adds an SES client to a message
 * @param sesClient SES client
 * @returns Unary function that turns a message into a message with an SES client
 */
export const withSESClient = (sesClient?: SESv2Client) => withAwsClient('ses', sesClient ?? createSESClient());
