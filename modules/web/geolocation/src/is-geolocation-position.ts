/**
 * Returns true if an object is a geolocation position
 * @param obj Object
 * @returns true if the object is a geolocation position
 */
export function isGeolocationPosition(obj: unknown): obj is GeolocationPosition {
  return obj instanceof GeolocationPosition;
}
