import type { TranscribeClientConfig } from '@aws-sdk/client-transcribe';
import { TranscribeClient } from '@aws-sdk/client-transcribe';

/**
 * Creates a Transcribe client
 * @param configuration Configuration
 * @returns Transcribe client
 */
export function createTranscribeClient(configuration?: TranscribeClientConfig): TranscribeClient {
  return new TranscribeClient(configuration ?? {});
}
