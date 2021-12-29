import { type MonoTypeOperatorFunction } from '@komore/reactive';
import { type CollectionType } from './collection';
import { constraint } from './constraint';
import { getCollectionSize } from './get-collection-size';

/**
 * Constraint validation operator that tests whether the value is a non-empty collection
 * @template T Collection element type
 */
export function notEmpty<T>(): MonoTypeOperatorFunction<CollectionType<T>> {
  return constraint(value => 0 < getCollectionSize(value), 'collection.empty.not');
}
