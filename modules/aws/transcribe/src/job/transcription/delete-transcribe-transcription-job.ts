import { type TranscribeApiClient } from '../../transcribe-api-client';
import { transcribeTargetPrefix } from '../../transcribe-target-prefix';
import { type DeleteTranscribeTranscriptionJobParameters } from './delete-transcribe-transcription-job-parameters';

/**
 * Creates a function that deletes a Transcribe transcription job
 *
 * @param apiClient Transcribe API client
 * @returns Function that deletes a Transcribe transcription job
 */
export function deleteTranscribeTranscriptionJob(
  apiClient: TranscribeApiClient
): (parameters: DeleteTranscribeTranscriptionJobParameters) => Observable<void> {
  return parameters =>
    apiClient({
      operation: `${transcribeTargetPrefix}`,
      parameters,
    });
}
