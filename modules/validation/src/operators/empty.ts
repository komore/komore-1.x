import { type MonoTypeOperatorFunction } from '@komore/reactive';
import { type CollectionType } from './collection';
import { constraint } from './constraint';
import { getCollectionSize } from './get-collection-size';

/**
 * Constraint validation operator that tests whether the value is an empty collection
 * @note This operator implicitly applies the collection constraint
 */
export function empty<T>(): MonoTypeOperatorFunction<CollectionType<T>> {
  return constraint(value => getCollectionSize(value) === 0, 'collection.empty');
}
