import { cloneTemporal } from '../clone-temporal';
import { createLocalTime } from '../create-local-time';
import type { LocalTime } from '../local-time';
import type { TemporalWithTime } from '../temporal-with-time';

/**
 * Gets a local time representing the end of the day
 * @returns Local time representing the end of the day
 */
export function getEndOfDay(): LocalTime;

/**
 * Gets a temporal representing the end of the day
 * @param temporal Temporal
 * @returns Temporal at the end of the day
 * @template T Temporal type
 */
export function getEndOfDay<T extends TemporalWithTime>(temporal: T): T;

export function getEndOfDay<T extends TemporalWithTime>(temporal?: T): T | LocalTime {
  return cloneTemporal(temporal ?? createLocalTime(0), d => d.setHours(23, 59, 59, 999));
}
