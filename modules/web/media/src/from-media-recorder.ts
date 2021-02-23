import type { Observable } from '@komore/reactive';
import { fromEvent, merge, throwError } from '@komore/reactive';
import { mergeMap } from '@komore/reactive/operators';

/**
 * Creates an observable that emits a media recorder's events
 * @param mediaRecorder Media recorder
 * @returns Observable that emits the media recorder's events
 */
export function fromMediaRecorder(mediaRecorder: MediaRecorder): Observable<BlobEvent | Event> {
  return merge([
    fromEvent(mediaRecorder, 'dataavailable'),
    fromEvent(mediaRecorder, 'error').pipe(mergeMap(throwMediaRecorderError)),
    fromEvent(mediaRecorder, 'pause'),
    fromEvent(mediaRecorder, 'resume'),
    fromEvent(mediaRecorder, 'start'),
    fromEvent(mediaRecorder, 'stop')
  ]);
}

/**
 * Tranforms a media recorder error event into an observable error
 * @param event Media recorder error event
 * @returns Observable error
 */
function throwMediaRecorderError(event: MediaRecorderErrorEvent): Observable<never> {
  return throwError(() => event.error);
}
