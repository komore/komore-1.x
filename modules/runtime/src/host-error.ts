/**
 * Host error
 */
export interface HostError {
  readonly message: string;
  readonly source: string;
  readonly lineNumber: number;
  readonly columnNumber: number;
  readonly error: Error;
}
