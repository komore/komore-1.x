import { Temporal } from '@js-temporal/polyfill';

/**
 * Mocks the current plain date
 * @param plainDate Plain date
 * @returns Function that clears the mock when called
 */
export function mockCurrentPlainDate(plainDate: Temporal.PlainDate): () => void {
  const previousPlainDateISO = Temporal.now.plainDateISO;
  Temporal.now.plainDateISO = () => plainDate;
  return () => (Temporal.now.plainDateISO = previousPlainDateISO);
}
