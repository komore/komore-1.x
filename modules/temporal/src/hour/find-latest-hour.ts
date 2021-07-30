import type { TemporalWithTime } from '../temporal-with-time';
import { getHours } from './get-hours';

/**
 * Selects the latest hour from a list of temporals with time
 * @param temporals Temporals
 * @returns Latest hour
 */
export function findLatestHour<T extends TemporalWithTime>(temporals: ReadonlyArray<T>): T {
  const firstTemporal = temporals[0];
  const firstTemporalHour = getHours(firstTemporal);
  const [latestTemporal] = temporals.reduce((prev, curr) => {
    const [, previousHour] = prev;
    const currentHour = getHours(curr);
    if (previousHour < currentHour) {
      return [curr, currentHour];
    }

    return prev;
  }, [firstTemporal, firstTemporalHour]);

  return latestTemporal;
}
