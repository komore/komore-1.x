import { Temporal } from '@js-temporal/polyfill';
import { type MockTemporal } from './mock-temporal';

/**
 * Mocks the current plain time
 * @param plainTime Plain time
 * @returns Mock temporal
 */
export function mockCurrentPlainTime(plainTime: Temporal.PlainTime): MockTemporal {
  const previousPlainTimeISO = Temporal.Now.plainTimeISO;
  Temporal.Now.plainTimeISO = () => plainTime;
  return {
    clearMock: () => (Temporal.Now.plainTimeISO = previousPlainTimeISO),
  };
}
