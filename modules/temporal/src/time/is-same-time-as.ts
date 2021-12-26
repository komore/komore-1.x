import { asPlainTime } from '../as-plain-time';
import { type TemporalWithTime } from '../temporal-with-time';

/**
 * Returns a function that tests whether a temporal occurs at the same time as a reference temporal, ignoring any date component if present
 * @param referenceTemporal Reference temporal
 * @returns Function that tests whether a temporal occurs at the same time as the reference temporal
 */
export function isSameTimeAs(referenceTemporal: TemporalWithTime): (temporal: TemporalWithTime) => boolean {
  const referencePt = asPlainTime(referenceTemporal);
  return temporal => {
    const temporalPt = asPlainTime(temporal);
    return referencePt.until(temporalPt).sign === 0;
  };
}
