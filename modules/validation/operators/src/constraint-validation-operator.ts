import type { OperatorFunction } from '@komore/reactive';

/**
 * Constraint validation operator
 */
export type ConstraintValidationOperator = OperatorFunction<unknown, unknown> | undefined | null | true | false;
