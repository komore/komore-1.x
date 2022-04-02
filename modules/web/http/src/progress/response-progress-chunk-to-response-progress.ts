import { type ResponseProgress } from './response-progress';

/**
 * Reduces a response progress to a response progress with the added chunk
 * @param responseProgress Response progress
 * @param chunk Chunk
 * @returns Response progress with the added chunk
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
    bytesRemaining,
    bytesTotal,
    bytesTransferred,
    completionPercentage,
  };
}
