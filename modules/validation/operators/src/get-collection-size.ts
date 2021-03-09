import type { CollectionType } from './collection';

/**
 * Get a size from a collection
 * @param value Value
 * @returns Collection size
 */
export function getCollectionSize<T>(value: CollectionType<T>): number {
  return Array.isArray(value) ? value.length : value.size;
}
