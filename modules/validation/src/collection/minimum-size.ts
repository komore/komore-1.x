import { type MonoTypeOperatorFunction } from '@komore/reactive';
import { type CollectionType } from './collection';
import { constraint } from './constraint';
import { getCollectionSize } from './get-collection-size';

/**
 * Constraint validation operator that tests whether the value is a collection that is at least a minimum size
 * @note This operator implicitly applies the collection constraint
 */
export function minimumSize<T>(minimum: number): MonoTypeOperatorFunction<CollectionType<T>> {
  return constraint(value => minimum <= getCollectionSize(value), 'collection.size.minimum', { minimum });
}
