import { createLocalTime } from './create-local-time';
import type { LocalTime } from './local-time';

/**
 * Gets the current local time
 * @returns Current local time
 */
export function getCurrentLocalTime(): LocalTime {
  return createLocalTime(Date.now());
}
