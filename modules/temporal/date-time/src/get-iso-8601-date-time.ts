import type { TemporalWithDateTime } from './temporal-with-date-time';

/**
 * Gets an ISO 8601 date time string
 * @param temporal Temporal
 * @returns ISO 8601 date time string
 */
export function getISO8601DateTime(temporal: TemporalWithDateTime): string {
  return temporal._.toISOString();
}
