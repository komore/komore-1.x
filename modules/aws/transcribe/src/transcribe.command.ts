import {
  type DeleteTranscriptionJobCommandInput,
  type StartTranscriptionJobCommandInput,
} from '@aws-sdk/client-transcribe';

import { createAwsCommandType } from '@komore/aws';
import { commandProperties } from '@komore/command';

import { transcribeDomain } from './transcribe.domain';

/**
 * Transcribe command
 */
export const transcribeCommand = createAwsCommandType(transcribeDomain, {
  /**
   * Deletes a transcription job
   *
   * @note {@link https://docs.aws.amazon.com/transcribe/latest/APIReference/API_DeleteTranscriptionJob.html DeleteTranscriptionJob}
   */
  deleteTranscriptionJob: commandProperties<DeleteTranscriptionJobCommandInput>(),
  /**
   * Transcribes the audio from a media file
   *
   * @see {@link https://docs.aws.amazon.com/transcribe/latest/APIReference/API_StartTranscriptionJob.html StartTranscriptionJob}
   */
  startTranscriptionJob: commandProperties<StartTranscriptionJobCommandInput>(),
});
