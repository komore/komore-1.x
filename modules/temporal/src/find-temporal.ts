import type { TemporalWithDate } from './temporal-with-date';
import type { TemporalWithTime } from './temporal-with-time';

export function findTemporal<T extends TemporalWithTime | TemporalWithDate, P>(
  temporals: ReadonlyArray<T>,
  propertyMapper: (temporal: T) => P,
  predicate: (previous: P, current: P) => boolean,
  errorMessagePart: string,
  defaultIfEmpty?: T
): T {
  if (temporals.length === 0) {
    if (defaultIfEmpty !== undefined) {
      return defaultIfEmpty;
    }

    throw new Error(`unable to pick the ${errorMessagePart} from an empty list of temporals`);
  }

  const firstTemporal = temporals[0];
  const firstProperty = propertyMapper(firstTemporal);
  const [foundTemporal] = temporals.reduce(
    (prev, curr, index) => {
      if (index === 0) {
        return prev;
      }

      const [, previousProperty] = prev;
      const currentProperty = propertyMapper(curr);
      if (predicate(previousProperty, currentProperty)) {
        return [curr, currentProperty];
      }

      return prev;
    },
    [firstTemporal, firstProperty]
  );

  return foundTemporal;
}
