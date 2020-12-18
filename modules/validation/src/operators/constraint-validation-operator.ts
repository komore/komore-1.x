import { OperatorFunction } from 'rxjs';

/**
 * Constraint validation operator
 */
export type ConstraintValidationOperator = OperatorFunction<any, any> | undefined | null | true | false;
