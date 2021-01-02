import { Observable, throwError } from 'rxjs';

/**
 * Watches the current position
 * @param options Geolocation options
 * @returns Stream of positions and position errors
 */
export function watchPosition(options?: PositionOptions): Observable<GeolocationPosition | GeolocationPositionError> {
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
