import { type TranscribeTranscriptionJobName } from './name/transcribe-transcription-job-name';

/**
 * Delete Transcribe transcription job parameters
 *
 * @see {@link https://docs.aws.amazon.com/transcribe/latest/APIReference/API_DeleteTranscriptionJob.html#API_DeleteTranscriptionJob_RequestParameters DeleteTranscriptionJob Request Parameters}
 */
export interface DeleteTranscribeTranscriptionJobParameters {
  /**
   * Transcription job name
   */
  readonly TranscriptionJobName: TranscribeTranscriptionJobName;
}
