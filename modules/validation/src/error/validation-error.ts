import { type ConstraintViolationError } from './constraint-violation-error';

/**
 * Validator error
 */
export class ValidationError extends Error {
  /**
   * Error name
   */
  readonly name = 'ValidationError';
  /**
   * List of constraint violations
   */
  readonly constraintViolations: ReadonlyArray<ConstraintViolationError<Record<string, unknown>>>;

  /**
   * Class constructor
   *
   * @param constraintViolations List of constraint violations
   */
  constructor(constraintViolations: ReadonlyArray<ConstraintViolationError<Record<string, unknown>>>) {
    super(`validation failed: ${constraintViolations.length} constraint(s) violated`);
    this.constraintViolations = constraintViolations;
  }
}
