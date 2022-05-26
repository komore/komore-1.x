/**
 * Constraint violation error
 */
export class ConstraintViolationError<Constraints extends Record<string, unknown>> extends Error {
  /**
   * Constraints
   */
  readonly constraints?: Constraints;
  /**
   * Message identifier
   */
  readonly messageId: string;
  /**
   * Error name
   */
  readonly name = 'ConstraintViolationError';

  /**
   * Class constructor
   *
   * @param messageId Message identifier
   * @param constraints Constraints
   */
  constructor(messageId: string, constraints?: Constraints) {
    super(messageId);
    this.messageId = messageId;
    if (constraints !== undefined) {
      this.constraints = constraints;
    }
  }
}
