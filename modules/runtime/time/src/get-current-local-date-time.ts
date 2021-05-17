import { createLocalDateTime } from './create-local-date-time';
import type { LocalDateTime } from './local-date-time';

/**
 * Gets the current local date time
 * @returns Current local date time
 */
export function getCurrentLocalDateTime(): LocalDateTime {
  return createLocalDateTime(Date.now());
}
