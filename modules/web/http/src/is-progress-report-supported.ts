/**
 * Tests whether progress report is supported
 * @returns true if progress report is supported
 */
export function isProgressReportSupported(): boolean {
  return typeof ReadableStream !== 'undefined' && typeof Response !== 'undefined';
}
