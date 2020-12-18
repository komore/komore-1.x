import { TranslateClient } from '@aws-sdk/client-translate';
import { withAwsClient } from '@komore/integration-aws';

/**
 * Adds a Translate client to a message
 * @param translateClient Translate client
 * @returns Operator function that turns a message into a message with a Translate client
 */
export const withTranslateClient = (translateClient: TranslateClient) =>
  withAwsClient('translate', translateClient ?? new TranslateClient({}));
