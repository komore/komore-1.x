import { CollectionType } from './collection';

/**
 * Get a size from a collection
 * @param value Value
 * @returns Collection size
 */
export function getCollectionSize(value: CollectionType): number {
  return Array.isArray(value) ? value.length : value.size;
}
