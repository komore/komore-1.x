import { GetTranscriptionJobCommand, type TranscribeClient, type TranscriptionJob } from '@aws-sdk/client-transcribe';
import { sendCommand } from '@komore/integration-amazon';
import { map, type Observable } from '@komore/reactive';

export function getTranscriptionJob(
  transcribeClient: TranscribeClient,
  transcriptionJobName: string
): Observable<TranscriptionJob> {
  return sendCommand(
    transcribeClient,
    new GetTranscriptionJobCommand({
      TranscriptionJobName: transcriptionJobName
    })
  ).pipe(
    // TODO: remove the cast when the output is correctly typed
    map(output => output.TranscriptionJob as TranscriptionJob)
  );
}
