import type { RekognitionClientConfig } from '@aws-sdk/client-rekognition';
import { RekognitionClient } from '@aws-sdk/client-rekognition';

/**
 * Creates an Rekognition client
 * @param configuration Configuration
 * @returns Rekognition client
 */
export function createRekognitionClient(configuration?: RekognitionClientConfig): RekognitionClient {
  return new RekognitionClient(configuration ?? {});
}
