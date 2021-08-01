import { asPlainTime } from '../as-plain-time';
import type { TemporalWithTime } from '../temporal-with-time';

/**
 * Creates a function that tests whether a temporal with time occurs at a later time than a reference temporal with time
 * @param referenceTemporal Reference temporal
 * @param rhs Right-hand temporal with time
 * @returns Function that tests whether a temporal with time occurs at a later time than the reference temporal with time
 */
export function isLaterTimeThan(referenceTemporal: TemporalWithTime): (temporal: TemporalWithTime) => boolean {
  const referencePlainTime = asPlainTime(referenceTemporal);
  return temporal => {
    const temporalPlainTime = asPlainTime(temporal);
    return temporalPlainTime.until(referencePlainTime).sign < 0;
  };
}
