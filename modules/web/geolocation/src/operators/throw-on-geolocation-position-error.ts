import { throwUnless } from '@komore/operators';
import { OperatorFunction } from 'rxjs';

/**
 * Throws when a geolocation position error gets emitted
 */
function throwOnGeolocationPositionError(): OperatorFunction<
  GeolocationPosition | GeolocationPositionError,
  GeolocationPosition
> {
  return throwUnless((value): value is GeolocationPosition => 'coords' in value);
}
