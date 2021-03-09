import type { MonoTypeOperatorFunction } from '@komore/reactive';
import type { CollectionType } from './collection';
import { constraint } from './constraint';
import { getCollectionSize } from './get-collection-size';

/**
 * Constraint validation operator that tests whether the value is a collection that is not larger than a maximum size
 * @param maximum Maximum size
 * @template T Collection element type
 */
export function maximumSize<T>(maximum: number): MonoTypeOperatorFunction<CollectionType<T>> {
  return constraint(value => getCollectionSize(value) <= maximum, 'collection.size.maximum', { maximum });
}
