/**
 * HTTP client response progress
 */
export interface ResponseProgress {
  /**
   * Number of bytes remaining until the response is complete
   */
  readonly bytesRemaining?: number;
  /**
   * Number of bytes per second
   */
  readonly bytesPerSecond: number;
  /**
   * Number of bytes for the entire response
   */
  readonly bytesTotal?: number;
  /**
   * Number of bytes already transferred
   */
  readonly bytesTransferred?: number;
  /**
   * Completion percentage
   */
  readonly completionPercentage?: number;
}
