import type { TranscribeClient } from '@aws-sdk/client-transcribe';
import { withAwsClient } from '@komore/integration-amazon/operators';
import { createTranscribeClient } from '@komore/integration-amazon/transcribe';

/**
 * Adds a Transcribe client to a message
 * @param transcribeClient Transcribe client
 * @returns Operator function that turns a message into a message with a Transcribe client
 */
export const withTranscribeClient = (transcribeClient?: TranscribeClient) =>
  withAwsClient('transcribe', transcribeClient ?? createTranscribeClient());
