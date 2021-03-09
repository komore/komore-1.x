import { constraint } from './constraint';

/**
 * Collection type
 */
export type CollectionType<T> = ReadonlyArray<T> | ReadonlyMap<unknown, T> | ReadonlySet<T>;

/**
 * Constraint validation operator that tests whether the value is a collection
 * @note Arrays, maps and sets are accepted as collections
 */
export const collection = constraint((value): value is CollectionType<T> => {
  if (value === undefined || Array.isArray(value)) {
    return true;
  }

  return value instanceof Map || value instanceof Set;
}, 'collection');
