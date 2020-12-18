import { pipe } from 'rxjs';
import { collection } from './collection';
import { constraint } from './constraint';
import { getCollectionSize } from './get-collection-size';

/**
 * Constraint validation operator that tests whether the value is an empty collection
 * @note This operator implicitly applies the collection constraint
 */
export const empty = pipe(
  collection,
  constraint(value => getCollectionSize(value) === 0, 'collection.empty')
);
