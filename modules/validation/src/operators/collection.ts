import { constraint } from './constraint';

/**
 * Collection type
 */
export type CollectionType = ReadonlyArray<any> | ReadonlyMap<any, any> | ReadonlySet<any>;

/**
 * Constraint validation operator that tests whether the value is a collection
 * @note Arrays, maps and sets are accepted as collections
 */
export const collection = constraint((value): value is CollectionType => {
  if (value === undefined || Array.isArray(value)) {
    return true;
  }

  return value instanceof Map || value instanceof Set;
}, 'collection');
