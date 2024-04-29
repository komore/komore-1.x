import { type TranscribeApiClient } from '../../transcribe-api-client';
import { type DeleteTranscribeTranscriptionJobParameters } from './delete-transcribe-transcription-job-parameters';

/**
 * Creates a function that deletes a Transcribe transcription job
 *
 * @param apiClient Transcribe API client
 * @returns Function that deletes a Transcribe transcription job
 * @see {@link https://docs.aws.amazon.com/transcribe/latest/APIReference/API_DeleteTranscriptionJob.html DeleteTranscriptionJob}
 */
export function deleteTranscribeTranscriptionJob(
  apiClient: TranscribeApiClient
): (parameters: DeleteTranscribeTranscriptionJobParameters) => Observable<void> {
  const operation = 'DeleteTranscriptionJob';
  return parameters => apiClient({ operation, parameters });
}
