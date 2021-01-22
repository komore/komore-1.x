import type { TranslateClient } from '@aws-sdk/client-translate';
import { withAwsClient } from '@komore/integration-amazon';
import { createTranslateClient } from '../create-translate-client';

/**
 * Adds a Translate client to a message
 * @param translateClient Translate client
 * @returns Operator function that turns a message into a message with a Translate client
 */
export const withTranslateClient = (translateClient: TranslateClient) =>
  withAwsClient('translate', translateClient ?? createTranslateClient());
