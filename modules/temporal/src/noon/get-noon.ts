import { Temporal } from 'proposal-temporal';

/**
 * Gets noon as a plain time
 * @returns Noon
 */
export function getNoon(): Temporal.PlainTime {
  return Temporal.PlainTime.from('12:00');
}
