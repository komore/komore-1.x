import { TranslateClient as AwsTranslateClient } from '@aws-sdk/client-translate';

import { createAwsClient } from '@komore/aws';

import { translateCommand } from '../translate.command';
import { translateError } from '../translate.error';
import { translateEvent } from '../translate.event';
import { translateQuery } from '../translate.query';
import { type TranslateClient } from './translate-client';
import { type TranslateClientOptions } from './translate-client-options';
import { translateCommandEventMapping } from './translate-command-event-mapping';

/**
 * Creates a Translate client
 *
 * @param options Translate client options
 * @returns Translate client
 */
export function createTranslateClient(options: TranslateClientOptions): TranslateClient {
  return createAwsClient({
    commandEventMapping: translateCommandEventMapping,
    commandType: translateCommand,
    constructor: AwsTranslateClient,
    errorType: translateError,
    eventType: translateEvent,
    options,
    queryType: translateQuery,
  });
}
