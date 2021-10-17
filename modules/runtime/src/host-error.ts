/**
 * Host error
 */
export class HostError extends Error {
  readonly source: string;
  readonly lineNumber: number;
  readonly columnNumber: number;
  readonly error: Error;

  /**
   * Class constructor
   * @param message Message
   * @param source Source
   * @param lineNumber Line number
   * @param columnNumber Column number
   * @param error Error
   */
  constructor(message: string, source: string, lineNumber: number, columnNumber: number, error: Error) {
    super(message);
    this.name = 'HostError';
    this.source = source;
    this.lineNumber = lineNumber;
    this.columnNumber = columnNumber;
    this.error = error;
  }
}
