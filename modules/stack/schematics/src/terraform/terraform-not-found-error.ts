/**
 * Terraform not found error
 */
export class TerraformNotFoundError extends Error {
  readonly name = 'TerraformNotFoundError';

  /**
   * Class constructor
   *
   * @param message Message
   */
  constructor(message: string) {
    super(message);
  }
}
