import { type ResponseProgress } from './response-progress';

/**
 * Reduces an HTTP client response progress to an HTTP client response progress with the added chunk
 *
 * @param responseProgress HTTP client response progress
 * @param chunk Chunk
 * @returns HTTP client response progress with the added chunk
 */
export function responseProgressChunkToResponseProgress(
  responseProgress: ResponseProgress,
  chunk: Uint8Array
): ResponseProgress {
  const { bytesTotal, bytesTransferred: bytesPreviouslyTransferred } = responseProgress;
  const chunkLength = chunk.length;
  const bytesTransferred = (bytesPreviouslyTransferred ?? 0) + chunkLength;
  const knownTotal = bytesTotal !== undefined;
  const bytesRemaining = knownTotal ? bytesTotal - bytesTransferred : undefined;
  const completionPercentage = knownTotal ? bytesTransferred / bytesTotal : undefined;
  return {
    bytesPerSecond: 0, // TODO
    ...(bytesRemaining !== undefined ? { bytesRemaining } : {}),
    ...(bytesTotal !== undefined ? { bytesTotal } : {}),
    bytesTransferred,
    ...(completionPercentage !== undefined ? { completionPercentage } : {}),
  };
}
