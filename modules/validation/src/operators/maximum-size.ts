import { pipe } from 'rxjs';
import { collection } from './collection';
import { constraint } from './constraint';
import { getCollectionSize } from './get-collection-size';

/**
 * Constraint validation operator that tests whether the value is a collection that is not larger than a maximum size
 * @note This operator implicitly applies the collection constraint
 */
export const maximumSize = (maximum: number) =>
  pipe(
    collection,
    constraint(value => getCollectionSize(value) <= maximum, 'collection.size.maximum', { maximum })
  );
