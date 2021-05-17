import { createLocalDate } from './create-local-date';
import type { LocalDate } from './local-date';

/**
 * Gets the current local date
 * @returns Current local date
 */
export function getCurrentLocalDate(): LocalDate {
  return createLocalDate(Date.now());
}
