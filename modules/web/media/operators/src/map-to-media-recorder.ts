import type { OperatorFunction } from '@komore/reactive';
import { map } from '@komore/reactive/operators';

/**
 * Maps a media stream to a media recorder
 * @param options Media recorder options
 */
export function mapToMediaRecorder(options?: MediaRecorderOptions): OperatorFunction<MediaStream, MediaRecorder> {
  return map(mediaStream => new MediaRecorder(mediaStream, options));
}
