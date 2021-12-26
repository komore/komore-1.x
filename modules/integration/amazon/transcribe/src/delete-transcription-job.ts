import { DeleteTranscriptionJobCommand, type TranscribeClient } from '@aws-sdk/client-transcribe';
import { type Observable, redactValue } from '@komore/reactive';
import { sendCommand } from '@komore/integration-amazon';

/**
 * Deletes a transcription job
 * @param transcribeClient Transcribe client
 * @param transcriptionJobName Transcription job name
 * @returns Observable that emits when the transcription job is deleted
 * @note {@link https://docs.aws.amazon.com/transcribe/latest/dg/API_DeleteTranscriptionJob.html DeleteTranscriptionJob}
 */
export function deleteTranscriptionJob(
  transcribeClient: TranscribeClient,
  transcriptionJobName: string
): Observable<void> {
  return sendCommand(
    transcribeClient,
    new DeleteTranscriptionJobCommand({
      TranscriptionJobName: transcriptionJobName
    })
  ).pipe(redactValue());
}
