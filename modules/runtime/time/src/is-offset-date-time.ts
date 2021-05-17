import type { OffsetDateTime } from "./offset-date-time";
import type { Temporal } from "./temporal";

/**
 * Tests whether a temporal is an offset date time
 * @param temporal Temporal
 * @returns true if the temporal is an offset date time
 */
export function isOffsetDateTime(temporal: Temporal): temporal is OffsetDateTime {
  return temporal._t === 'offset-date-time';
}
