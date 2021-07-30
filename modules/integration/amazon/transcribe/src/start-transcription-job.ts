import type { StartTranscriptionJobRequest, TranscribeClient, TranscriptionJob } from '@aws-sdk/client-transcribe';
import { StartTranscriptionJobCommand } from '@aws-sdk/client-transcribe';
import { sendCommand } from '@komore/integration-amazon';
import type { Observable } from '@komore/reactive';
import { map } from '@komore/reactive/operators';

export function startTranscriptionJob(
  transcribeClient: TranscribeClient,
  request: StartTranscriptionJobRequest
): Observable<TranscriptionJob> {
  return sendCommand(transcribeClient, new StartTranscriptionJobCommand(request)).pipe(
    // TODO: remove the cast when the output is correctly typed
    map(output => output.TranscriptionJob as TranscriptionJob)
  );
}
