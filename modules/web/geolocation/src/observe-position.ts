import { Observable, throwError } from '@komore/reactive';

/**
 * Creates an observable that emits the geolocation position or geolocation error
 * @param options Geolocation options
 * @returns Observable that emits both geolocation positions and errors
 */
export function observePosition(options?: PositionOptions): Observable<GeolocationPosition | GeolocationPositionError> {
  if (globalThis.navigator?.geolocation?.watchPosition === undefined) {
    return throwError(() => new Error('Geolocation not supported'));
  }

  if (!globalThis.isSecureContext) {
    return throwError(() => new Error('Geolocation not available outside a secure context'));
  }

  return new Observable<GeolocationPosition | GeolocationPositionError>(observer => {
    const watchId = navigator.geolocation.watchPosition(
      position => observer.next(position),
      error => observer.next(error),
      options
    );

    return () => navigator.geolocation.clearWatch(watchId);
  });
}
