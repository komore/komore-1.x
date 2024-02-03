import { type MockTemporal } from './mock-temporal';

/**
 * Mocks the current plain date time and returns a mock temporal
 *
 * @param plainDateTime Plain date time
 * @returns Mock temporal
 */
export function mockCurrentPlainDateTime(plainDateTime: Temporal.PlainDateTime): MockTemporal {
  const previousPlainDateTimeISO = Temporal.Now.plainDateTimeISO;
  Temporal.Now.plainDateTimeISO = () => plainDateTime;
  return {
    clearMock: () => (Temporal.Now.plainDateTimeISO = previousPlainDateTimeISO),
  };
}
