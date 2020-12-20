import { OperatorFunction } from "rxjs";
import { map } from "rxjs/dist/types/operators";

/**
 * Throws when a geolocation position error gets emitted
 */
function throwOnGeolocationPositionError(): OperatorFunction<GeolocationPosition | GeolocationPositionError, GeolocationPosition> {
  return throwIf
}
