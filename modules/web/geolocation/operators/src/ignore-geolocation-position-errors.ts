import type { OperatorFunction } from '@komore/reactive';
import { filter } from '@komore/reactive/operators';

/**
 * Ignores geolocation position errors
 */
export function ignoreGeolocationPositionErrors(): OperatorFunction<
  GeolocationPosition | GeolocationPositionError,
  GeolocationPosition
> {
  return filter((value): value is GeolocationPosition => value instanceof GeolocationPosition);
}
