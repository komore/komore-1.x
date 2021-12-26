import { defer, type Observable } from '@komore/reactive';

/**
 * Gets user media
 * @param constraints Constraints
 * @returns Media stream
 */
export function getUserMedia(constraints?: MediaStreamConstraints): Observable<MediaStream> {
  return defer(() => navigator.mediaDevices.getUserMedia(constraints));
}
