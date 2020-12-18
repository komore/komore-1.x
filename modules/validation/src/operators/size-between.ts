import { pipe } from 'rxjs';
import { collection } from './collection';
import { constraint } from './constraint';
import { getCollectionSize } from './get-collection-size';

export const sizeBetween = (minimum: number, maximum: number) =>
  pipe(
    collection,
    constraint(
      value => {
        const size = getCollectionSize(value);
        return minimum <= size && size <= maximum;
      },
      'container.size.between',
      {
        minimum,
        maximum
      }
    )
  );
