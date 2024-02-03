import { throwError } from '@komore/reactive';

import { webGeolocationError } from './web-geolocation.error';

/**
 * Creates an observable that emits the geolocation position or geolocation error
 *
 * @param options Geolocation options
 * @returns Observable that emits both geolocation positions and errors
 */
export function observePosition(options?: PositionOptions): Observable<GeolocationPosition | GeolocationPositionError> {
  if (globalThis.navigator?.geolocation?.watchPosition === undefined) {
    return throwError(() => webGeolocationError.notSupported());
  }

  if (!globalThis.isSecureContext) {
    return throwError(() => webGeolocationError.secureContextRequired());
  }

  return new Observable<GeolocationPosition | GeolocationPositionError>(subscriber => {
    const watchId = navigator.geolocation.watchPosition(
      position => subscriber.next(position),
      error => subscriber.next(error),
      options
    );

    subscriber.add(() => navigator.geolocation.clearWatch(watchId));
  });
}
