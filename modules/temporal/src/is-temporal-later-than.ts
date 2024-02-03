import { type TemporalWithDate } from './temporal-with-date';
import { type TemporalWithTime } from './temporal-with-time';

/**
 * TODO
 * @param referenceTemporal
 * @param orEqual
 * @returns
 */
export function isTemporalLaterThan<T extends TemporalWithDate | TemporalWithTime>(
  referenceTemporal: T,
  orEqual?: boolean
): (temporal: T) => boolean {
  const castReferenceTemporal = referenceTemporal as Temporal.PlainDateTime;
  return temporal => {
    const castTemporal = temporal as Temporal.PlainDateTime;
    const sign = castTemporal.until(castReferenceTemporal).sign;
    return sign < 0 || (orEqual === true && sign === 0);
  };
}
