import { pipe } from 'rxjs';
import { collection } from './collection';
import { constraint } from './constraint';
import { getCollectionSize } from './get-collection-size';

/**
 * Constraint validation operator that tests whether the value is a collection that is at least a minimum size
 * @note This operator implicitly applies the collection constraint
 */
export const minimumSize = (minimum: number) =>
  pipe(
    collection,
    constraint(value => minimum <= getCollectionSize(value), 'collection.size.minimum', { minimum })
  );
