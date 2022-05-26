import { isArray } from '@komore/array';
import { type CollectionType } from './collection-type';

/**
 * Returns the size of a collection
 *
 * @param collection Collection
 * @returns Collection size
 */
export function toCollectionSize<T>(collection: CollectionType<T>): number {
  return isArray(collection) ? collection.length : collection.size;
}
