import { isTemporalEarlierThan, type TemporalWithDate, type TemporalWithTime } from '@komore/temporal';
import { type ConstraintValidator } from '../constraint-validator';
import { createConstraintValidator } from '../create-constraint-validator';

/**
 * Constraint validation operator that tests whether the value is a temporal occuring earlier than a reference temporal
 *
 * @param referenceTemporal Latest temporal before which the temporal must occur
 * @param inclusive Include the reference temporal as a possible value
 * @template T Temporal type
 */
export function earlierThan<T extends TemporalWithDate | TemporalWithTime>(
  referenceTemporal: T,
  inclusive = false
): ConstraintValidator<T> {
  return createConstraintValidator(
    isTemporalEarlierThan(referenceTemporal, inclusive),
    `temporal.earlier.${inclusive ? 'inclusive' : 'strictly'}`,
    { referenceTemporal, inclusive }
  );
}
