/**
 * Returns true if a geolocation position or geolocation position error is a geolocation position error
 * @param geolocationPositionOrError Geolocation position or position error
 * @returns true if the param is a geolocation position error
 */
export function isGeolocationPositionError(
  geolocationPositionOrError: GeolocationPosition | GeolocationPositionError
): geolocationPositionOrError is GeolocationPositionError {
  return geolocationPositionOrError instanceof GeolocationPositionError;
}
