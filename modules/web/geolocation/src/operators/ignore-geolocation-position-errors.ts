import { OperatorFunction } from 'rxjs';
import { filter } from 'rxjs/operators';

/**
 * Ignores geolocation position errors
 */
export function ignoreGeolocationPositionErrors(): OperatorFunction<
  GeolocationPosition | GeolocationPositionError,
  GeolocationPosition
> {
  return filter((value): value is GeolocationPosition => 'coords' in value);
}
