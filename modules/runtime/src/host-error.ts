/**
 * Host error
 */
export interface HostError extends Error {
  readonly source: string;
  readonly lineNumber: number;
  readonly columnNumber: number;
  readonly error: Error;
}
