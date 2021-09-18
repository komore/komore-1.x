/**
 * TODO
 */
export function isGeolocationPosition(
  geolocationPositionOrError: GeolocationPosition | GeolocationPositionError
): geolocationPositionOrError is GeolocationPosition {
  return geolocationPositionOrError instanceof GeolocationPosition;
}
