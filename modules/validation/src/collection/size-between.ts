import { type ConstraintValidator } from '../constraint-validator';
import { createConstraintValidator } from '../create-constraint-validator';
import { type CollectionType } from './collection-type';
import { toCollectionSize } from './to-collection-size';

/**
 * Creates a constraint validator that tests whether a collection size is within a certain range
 *
 * @param minimum Minimum length or size
 * @param maximum Maximum length or size
 */
export function sizeBetween<Collection extends CollectionType<unknown>>(
  minimum: number,
  maximum: number
): ConstraintValidator<Collection> {
  return createConstraintValidator(
    value => {
      const size = toCollectionSize(value);
      return minimum <= size && size <= maximum;
    },
    'container.size.between',
    {
      minimum,
      maximum,
    }
  );
}
