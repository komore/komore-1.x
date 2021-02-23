import type { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { observeMediaQuery } from './observe-media-query';

/**
 * Observes the device pixel ratio
 * @returns Observable device pixel ratio
 */
export function observeDevicePixelRatio(): Observable<number> {
  return observeMediaQuery(`(resolution: ${window.devicePixelRatio}dppx`).pipe(
    map(() => window.devicePixelRatio),
    startWith(window.devicePixelRatio)
  );
}
