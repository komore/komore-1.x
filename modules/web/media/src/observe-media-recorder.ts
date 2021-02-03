import type { Observable } from 'rxjs';
import { fromEvent, merge, throwError } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

/**
 * Observes a media recorder
 * @param mediaRecorder Media recorder
 * @returns Observable stream of media recorder events
 */
export function observeMediaRecorder(mediaRecorder: MediaRecorder): Observable<BlobEvent | Event> {
  return merge(
    fromEvent<BlobEvent>(mediaRecorder, 'dataavailable'),
    fromEvent<MediaRecorderErrorEvent>(mediaRecorder, 'error').pipe(mergeMap(throwMediaRecorderError)),
    fromEvent(mediaRecorder, 'pause'),
    fromEvent(mediaRecorder, 'resume'),
    fromEvent(mediaRecorder, 'start'),
    fromEvent(mediaRecorder, 'stop')
  );
}

/**
 * Tranforms a media recorder error event into an observable error
 * @param event Media recorder error event
 * @returns Observable error
 */
function throwMediaRecorderError(event: MediaRecorderErrorEvent): Observable<never> {
  return throwError(() => event.error);
}
