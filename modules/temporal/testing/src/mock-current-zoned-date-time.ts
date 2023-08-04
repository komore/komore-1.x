import { Temporal } from '@komore/temporal';

import { type MockTemporal } from './mock-temporal';

/**
 * Mocks the current zoned date time
 *
 * @param zonedDateTime Zoned date time
 * @returns Mock temporal
 */
export function mockCurrentZonedDateTime(zonedDateTime: Temporal.ZonedDateTime): MockTemporal {
  const previousZonedDateTimeISO = Temporal.Now.zonedDateTimeISO;
  Temporal.Now.zonedDateTimeISO = () => zonedDateTime;
  return {
    clearMock: () => (Temporal.Now.zonedDateTimeISO = previousZonedDateTimeISO),
  };
}
