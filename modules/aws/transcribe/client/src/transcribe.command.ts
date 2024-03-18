import { transcribeDomain, type DeleteTranscribeTranscriptionJobParameters } from '@komore/aws/transcribe';
import { commandProperties, createCommandType } from '@komore/command';

/**
 * Transcribe command
 */
export const transcribeCommand = createCommandType(transcribeDomain, {
  /**
   * Deletes a transcription job
   *
   * @note {@link https://docs.aws.amazon.com/transcribe/latest/APIReference/API_DeleteTranscriptionJob.html DeleteTranscriptionJob}
   */
  deleteTranscriptionJob: commandProperties<DeleteTranscribeTranscriptionJobParameters>(),
  /**
   * Transcribes the audio from a media file
   *
   * @see {@link https://docs.aws.amazon.com/transcribe/latest/APIReference/API_StartTranscriptionJob.html StartTranscriptionJob}
   */
  startTranscriptionJob: commandProperties<StartTranscriptionJobCommandInput>(),
});
