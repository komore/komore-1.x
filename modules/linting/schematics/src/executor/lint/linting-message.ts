/**
 * Linting message
 */
export interface LintingMessage {
  /**
   * Column
   */
  readonly column: number;
  /**
   * File path
   */
  readonly filePath: string;
  /**
   * Message
   */
  readonly message: string;
  /**
   * Row
   */
  readonly row: number;
}
