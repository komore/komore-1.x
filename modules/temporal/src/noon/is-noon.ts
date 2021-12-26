import { asPlainTime } from '../as-plain-time';
import { type TemporalWithTime } from '../temporal-with-time';

/**
 * Tests whether a temporal with time occurs at noon
 * @param temporal Temporal with time
 * @returns true if the temporal occurs at noon
 */
export function isNoon(temporal: TemporalWithTime): boolean {
  const pt = asPlainTime(temporal);
  return (
    pt.hour === 12 &&
    pt.minute === 0 &&
    pt.second === 0 &&
    pt.millisecond === 0 &&
    pt.millisecond === 0 &&
    pt.nanosecond === 0
  );
}
