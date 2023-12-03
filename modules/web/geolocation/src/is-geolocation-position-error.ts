/**
 * Returns true if an object is a geolocation position error
 *
 * @param obj Object
 * @returns true if the object is a geolocation position error
 */
export function isGeolocationPositionError(obj: unknown): obj is GeolocationPositionError {
  return obj instanceof GeolocationPositionError;
}
