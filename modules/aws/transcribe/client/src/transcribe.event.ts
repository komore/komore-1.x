import { type StartTranscriptionJobCommandOutput } from '@aws-sdk/client-transcribe';

import { createAwsEventType } from '@komore/aws';
import { eventProperties } from '@komore/event';

import { transcribeDomain } from './transcribe.domain';

/**
 * Transcribe event
 */
export const transcribeEvent = createAwsEventType(transcribeDomain, {
  /**
   * A transcription job has been deleted
   *
   * @note {@link https://docs.aws.amazon.com/transcribe/latest/APIReference/API_DeleteTranscriptionJob.html DeleteTranscriptionJob}
   */
  transcriptionJobDeleted: eventProperties<{ TranscriptionJobName: string }>(),
  /**
   * Transcription of the audio from a media file has started
   *
   * @see {@link https://docs.aws.amazon.com/transcribe/latest/APIReference/API_StartTranscriptionJob.html StartTranscriptionJob}
   */
  transcriptionJobStarted: eventProperties<StartTranscriptionJobCommandOutput>(),
});
