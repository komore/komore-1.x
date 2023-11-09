/**
 * Creates a function that returns a media recorder from a media stream
 *
 * @param options Media recorder options
 * @returns Function that returns a media recorder, given a media stream
 */
export function mediaStreamToMediaRecorder(
  options?: MediaRecorderOptions
): (mediaStream: MediaStream) => MediaRecorder {
  return mediaStream => new MediaRecorder(mediaStream, options);
}
