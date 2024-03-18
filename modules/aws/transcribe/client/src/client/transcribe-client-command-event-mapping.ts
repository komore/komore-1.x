import { type CommandName } from '@komore/command';
import { type EventName } from '@komore/event';
import { type ReadonlyRecord } from '@komore/typescript';

import { type transcribeCommand } from '../transcribe.command';
import { type transcribeEvent } from '../transcribe.event';

/**
 * Transcribe command to event mapping
 *
 * @private
 */
export const transcribeClientCommandEventMapping = {
  startTranscriptionJob: 'transcriptionJobStarted',
  deleteTranscriptionJob: 'transcriptionJobDeleted',
} as const satisfies ReadonlyRecord<CommandName<typeof transcribeCommand>, EventName<typeof transcribeEvent>>;
