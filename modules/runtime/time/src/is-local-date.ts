import type { LocalDate } from './local-date';
import type { Temporal } from './temporal';

/**
 * Tests whether a temporal is a local date
 * @param temporal Temporal
 * @returns true if the temporal is a local date
 */
export function isLocalDate(temporal: Temporal): temporal is LocalDate {
  return temporal._t === 'local-date';
}
