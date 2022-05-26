import { isTemporalLaterThan, type TemporalWithDate, type TemporalWithTime } from '@komore/temporal';
import { type ConstraintValidator } from '../constraint-validator';
import { createConstraintValidator } from '../create-constraint-validator';

/**
 * Constraint validation operator that tests whether the value is a temporal occuring later than a reference temporal
 *
 * @param referenceTemporal Earliest temporal after which the temporal must occur
 * @param inclusive Include the reference temporal as a possible value
 * @template T Temporal type
 */
export function laterThan<T extends TemporalWithDate | TemporalWithTime>(
  referenceTemporal: T,
  inclusive = false
): ConstraintValidator<T> {
  return createConstraintValidator(
    isTemporalLaterThan(referenceTemporal, inclusive),
    `temporal.later.${inclusive ? 'inclusive' : 'strictly'}`,
    { referenceTemporal, inclusive }
  );
}
