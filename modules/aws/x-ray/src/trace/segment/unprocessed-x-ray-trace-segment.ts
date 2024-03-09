import { type XRayTraceSegmentId } from './id/x-ray-trace-segment-id';

/**
 * Unprocessed X-Ray trace segment
 *
 * @see {@link https://docs.aws.amazon.com/xray/latest/api/API_UnprocessedTraceSegment.html UnprocessedTraceSegment}
 */
export interface UnprocessedXRayTraceSegment {
  /**
   * Error code
   */
  readonly ErrorCode: string;
  /**
   * X-Ray trace segment identifier
   */
  readonly Id: XRayTraceSegmentId;
  /**
   * Message
   */
  readonly Message: string;
}
