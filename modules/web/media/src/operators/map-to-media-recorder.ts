import type { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Maps a media stream to a media recorder
 * @param options Media recorder options
 */
export function mapToMediaRecorder(options?: MediaRecorderOptions): OperatorFunction<MediaStream, MediaRecorder> {
  return map(mediaStream => new MediaRecorder(mediaStream, options));
}
