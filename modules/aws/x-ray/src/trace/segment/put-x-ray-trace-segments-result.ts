import { type UnprocessedXRayTraceSegment } from './unprocessed-x-ray-trace-segment';

/**
 * Put X-Ray trace segments result
 *
 * @see {@link https://docs.aws.amazon.com/xray/latest/api/API_PutTraceSegments.html#API_PutTraceSegments_ResponseElements PutTraceSegments Response Elements}
 */
export interface PutXRayTraceSegmentsResult {
  /**
   * Unprocessed trace segments
   */
  readonly UnprocessedTraceSegments: ReadonlyArray<UnprocessedXRayTraceSegment>;
}
