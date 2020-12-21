import { Observable, throwError } from 'rxjs';

/**
 * Watches the current position
 * @param options Geolocation options
 * @returns Observable stream of positions or undefined when no position is available at the time
 */
export function watchPosition(options?: PositionOptions): Observable<GeolocationPosition | GeolocationPositionError> {
  if (globalThis.navigator?.geolocation?.watchPosition === undefined) {
    return throwError(() => new Error('Geolocation not supported'));
  }

  return new Observable<GeolocationPosition | undefined>(observer => {
    const watchId = navigator.geolocation.watchPosition(
      position => observer.next(position),
      () => observer.next(undefined),
      options
    );

    return () => navigator.geolocation.clearWatch(watchId);
  });
}
