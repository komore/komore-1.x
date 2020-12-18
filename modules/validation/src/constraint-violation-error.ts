/**
 * Constraint violation error
 */
export class ConstraintViolationError<Constraints extends Record<string, any>> extends Error {
  /**
   * Class constructor
   * @param message Message
   * @param constraints Constraints
   */
  constructor(messageId: string, readonly constraints?: Constraints) {
    super(messageId);
  }
}
