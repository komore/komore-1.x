import type { TranscribeClient, TranscriptionJob } from '@aws-sdk/client-transcribe';
import { GetTranscriptionJobCommand } from '@aws-sdk/client-transcribe';
import { sendCommand } from '@komore/integration-amazon';
import type { Observable } from '@komore/reactive';
import { map } from '@komore/reactive/operators';

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
