// import { of } from '@komore/reactive';
import { throwOnGeolocationPositionError } from './throw-on-geolocation-position-error';

describe('Throw on geolocation position error operator', () => {
  it.skip('TODO: throws when a geolocation position error is encountered', () => {
    given: 'an emitted value that is not a geolocation position';
    // const value$ = of({} as GeolocationPositionError);
    throwOnGeolocationPositionError();
  });
});
