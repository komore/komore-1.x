import { of } from 'rxjs';
import { throwOnGeolocationPositionError } from './throw-on-geolocation-position-error';

describe('Throw on geolocation position error operator', () => {
  it('throws when a geolocation position error is encountered', () => {
    // given: an emitted value that's not a geolocation position
    const value$ = of({} as GeolocationPositionError);
    // 
  });
});
