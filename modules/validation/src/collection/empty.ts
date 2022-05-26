import { type ConstraintValidator } from '../constraint-validator';
import { createConstraintValidator } from '../create-constraint-validator';
import { type CollectionType } from './collection-type';
import { toCollectionSize } from './to-collection-size';

/**
 * Constraint validator that tests whether a collection is empty
 */
export function empty<Collection extends CollectionType<unknown>>(): ConstraintValidator<Collection> {
  return createConstraintValidator(value => toCollectionSize(value) === 0, 'collection.empty');
}
