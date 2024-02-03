import { type MockTemporal } from './mock-temporal';

/**
 * Mocks the current time zone identifier and returns a mock temporal
 *
 * @param timeZone Time zone
 * @returns Mock temporal
 */
export function mockCurrentTimeZoneId(timeZoneId: string): MockTemporal {
  const previousTimeZoneId = Temporal.Now.timeZoneId;
  Temporal.Now.timeZoneId = () => timeZoneId;
  return {
    clearMock: () => (Temporal.Now.timeZoneId = previousTimeZoneId),
  };
}
