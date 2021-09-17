import { Temporal } from '@js-temporal/polyfill';

/**
 * Mocks the current plain date time
 * @param plainDateTime Plain date time
 * @returns Function that clears the mock when called
 */
export function mockCurrentPlainDateTime(plainDateTime: Temporal.PlainDateTime): () => void {
  const previousPlainDateTimeISO = Temporal.Now.plainDateTimeISO;
  Temporal.Now.plainDateTimeISO = () => plainDateTime;
  return () => (Temporal.Now.plainDateTimeISO = previousPlainDateTimeISO);
}
