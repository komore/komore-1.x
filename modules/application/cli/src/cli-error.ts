/**
 * CLI error
 */
export class CliError extends Error {
  readonly name = 'CliError';

  /**
   * Class constructor
   * @param message Message
   * @param exitCode Exit code
   */
  constructor(message: string, readonly exitCode: number = 1) {
    super(message);
  }
}
