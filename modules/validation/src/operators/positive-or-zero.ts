import { pipe, throwUnless } from '@komore/reactive';
import { numeric } from './numeric';

/**
 * Constraint validation operator that tests whether the value is a positive number or zero
 */
export const positiveOrZero = pipe(
  numeric(),
  throwUnless(
    value => 0 <= value /* TODO: isPositiveOrZero from @komore/functional or math */,
    value => new ConstraintViolationError('numeric.positive.zero', { value })
  )
);
