import { type AwsClient } from '@komore/aws';

import { type transcribeCommand } from '../transcribe.command';
import { type transcribeError } from '../transcribe.error';
import { type transcribeEvent } from '../transcribe.event';
import { type transcribeQuery } from '../transcribe.query';
import { type transcribeCommandEventMapping } from './transcribe-command-event-mapping';

/**
 * Transcribe client
 */
export type TranscribeClient = AwsClient<
  typeof transcribeCommand,
  typeof transcribeCommandEventMapping,
  typeof transcribeEvent,
  typeof transcribeQuery,
  typeof transcribeError
>;
