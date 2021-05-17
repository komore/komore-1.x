import { LocalDateTime } from './local-date-time';
import { Temporal } from './temporal';

/**
 * Tests whether a temporal is a local date time
 * @param temporal Temporal
 * @returns true if the temporal is a local date time
 */
export function isLocalDateTime(temporal: Temporal): temporal is LocalDateTime {
  return (temporal as Partial<LocalDateTime>)._localDateTime !== undefined;
}
