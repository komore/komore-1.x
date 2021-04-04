/**
 * Response progress
 */
export interface ResponseProgress {
  readonly bytesRemaining?: number;
  readonly bytesPerSecond: number;
  readonly bytesTotal?: number;
  readonly bytesTransferred?: number;
  readonly completionPercentage?: number;
}
