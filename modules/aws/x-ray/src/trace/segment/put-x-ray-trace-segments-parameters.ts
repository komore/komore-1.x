/**
 * Put X-Ray trace segments parameters
 *
 * @see {@link https://docs.aws.amazon.com/xray/latest/api/API_PutTraceSegments.html#API_PutTraceSegments_RequestBody PutTraceSegments Request Body}
 */
export interface PutXRayTraceSegmentsParameters {
  /**
   * Trace segment documents
   */
  readonly TraceSegmentDocuments: ReadonlyArray<string>;
}
