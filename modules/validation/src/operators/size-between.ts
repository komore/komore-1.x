import { type MonoTypeOperatorFunction } from '@komore/reactive';
import { type CollectionType } from './collection';
import { constraint } from './constraint';
import { getCollectionSize } from './get-collection-size';

export function sizeBetween<T>(minimum: number, maximum: number): MonoTypeOperatorFunction<CollectionType<T>> {
  return constraint(
    value => {
      const size = getCollectionSize(value);
      return minimum <= size && size <= maximum;
    },
    'container.size.between',
    {
      minimum,
      maximum
    }
  );
}
