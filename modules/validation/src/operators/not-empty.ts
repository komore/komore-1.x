import { pipe } from 'rxjs';
import { collection } from './collection';
import { constraint } from './constraint';
import { getCollectionSize } from './get-collection-size';

/**
 * Constraint validation operator that tests whether the value is a non-empty collection
 * @note This operator implicitly applies the collection constraint
 */
export const notEmpty = pipe(
  collection,
  constraint(value => 0 < getCollectionSize(value), 'collection.empty.not')
);
