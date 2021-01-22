import type { PollyClient } from '@aws-sdk/client-polly';
import { withAwsClient } from '@komore/integration-amazon';
import { createPollyClient } from '../create-polly-client';

/**
 * Adds a Polly client to a message
 * @param pollyClient Polly client
 * @returns Unary function that turns a message into a message with a Polly client
 */
export const withPollyClient = (pollyClient: PollyClient) => withAwsClient('polly', pollyClient ?? createPollyClient());
