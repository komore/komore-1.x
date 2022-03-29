import { Temporal } from '@js-temporal/polyfill';
import { type MockTemporal } from './mock-temporal';

/**
 * Mocks the current time zone
 * @param timeZone Time zone
 * @returns Mock temporal
 */
export function mockCurrentTimeZone(timeZone: Temporal.TimeZone): MockTemporal {
  const previousTimeZone = Temporal.Now.timeZone;
  Temporal.Now.timeZone = () => timeZone;
  return {
    clearMock: () => (Temporal.Now.timeZone = previousTimeZone),
  };
}
