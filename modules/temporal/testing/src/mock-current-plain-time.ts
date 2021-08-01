import { Temporal } from '@js-temporal/polyfill';

/**
 * Mocks the current plain time
 * @param plainTime Plain time
 * @returns Function that clears the mock when called
 */
export function mockCurrentPlainTime(plainTime: Temporal.PlainTime): () => void {
  const previousPlainTimeISO = Temporal.now.plainTimeISO;
  Temporal.now.plainTimeISO = () => plainTime;
  return () => (Temporal.now.plainTimeISO = previousPlainTimeISO);
}
