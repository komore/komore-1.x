import { TranscribeClient as AwsTranscribeClient } from '@aws-sdk/client-transcribe';

import { createAwsClient } from '@komore/aws';

import { transcribeCommand } from '../transcribe.command';
import { transcribeError } from '../transcribe.error';
import { transcribeEvent } from '../transcribe.event';
import { transcribeQuery } from '../transcribe.query';
import { type TranscribeClient } from './transcribe-client';
import { type TranscribeClientOptions } from './transcribe-client-options';
import { transcribeCommandEventMapping } from './transcribe-command-event-mapping';

/**
 * Creates a Transcribe client
 *
 * @param configuration Configuration
 * @returns Transcribe client
 */
export function createTranscribeClient(options: TranscribeClientOptions): TranscribeClient {
  return createAwsClient({
    commandEventMapping: transcribeCommandEventMapping,
    commandType: transcribeCommand,
    constructor: AwsTranscribeClient,
    errorType: transcribeError,
    eventType: transcribeEvent,
    options,
    queryType: transcribeQuery,
  });
}
