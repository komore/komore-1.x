import type { OperatorFunction } from '@komore/reactive';
import { assertThat } from '@komore/reactive/operators';

/**
 * Throws when a geolocation position error gets emitted
 * @param errorFactory Optional error factory
 */
export function throwOnGeolocationPositionError(
  errorFactory?: (value: GeolocationPositionError) => unknown
): OperatorFunction<GeolocationPosition | GeolocationPositionError, GeolocationPosition> {
  return assertThat(
    (value): value is GeolocationPosition => value instanceof GeolocationPosition,
    geolocationPositionError =>
      errorFactory ? errorFactory(geolocationPositionError as GeolocationPositionError) : geolocationPositionError
  );
}
