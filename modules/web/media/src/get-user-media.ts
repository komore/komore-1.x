import type { Observable } from 'rxjs';
import { defer } from 'rxjs';

/**
 * Gets user media
 * @param constraints Constraints
 * @returns Media stream
 */
export function getUserMedia(constraints?: MediaStreamConstraints): Observable<MediaStream> {
  return defer(() => navigator.mediaDevices.getUserMedia(constraints));
}
