import { Temporal } from '@js-temporal/polyfill';
import { type MockTemporal } from './mock-temporal';

/**
 * Mocks the current plain date
 * @param plainDate Plain date
 * @returns Mock temporal
 */
export function mockCurrentPlainDate(plainDate: Temporal.PlainDate): MockTemporal {
  const previousPlainDateISO = Temporal.Now.plainDateISO;
  Temporal.Now.plainDateISO = () => plainDate;
  return {
    clearMock: () => (Temporal.Now.plainDateISO = previousPlainDateISO),
  };
}
