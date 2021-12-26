import {
  StartTranscriptionJobCommand,
  type StartTranscriptionJobRequest,
  type TranscribeClient,
  type TranscriptionJob
} from '@aws-sdk/client-transcribe';
import { sendCommand } from '@komore/integration-amazon';
import { map, type Observable } from '@komore/reactive';

export function startTranscriptionJob(
  transcribeClient: TranscribeClient,
  request: StartTranscriptionJobRequest
): Observable<TranscriptionJob> {
  return sendCommand(transcribeClient, new StartTranscriptionJobCommand(request)).pipe(
    // TODO: remove the cast when the output is correctly typed
    map(output => output.TranscriptionJob as TranscriptionJob)
  );
}
