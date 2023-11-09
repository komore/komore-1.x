import { deferPromise, type Observable } from '@komore/reactive';

/**
 * Returns a user's media stream, prompting the user to choose a media input from which the stream will be produced
 *
 * @param constraints Constraints
 * @returns Media stream
 */
export function getUserMedia(constraints?: MediaStreamConstraints): Observable<MediaStream> {
  return deferPromise(() => navigator.mediaDevices.getUserMedia(constraints));
}
