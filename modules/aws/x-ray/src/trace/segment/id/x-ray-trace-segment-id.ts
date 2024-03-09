/**
 * X-Ray trace segment identifier
 */
export type XRayTraceSegmentId = string & {
  readonly __tag_awsXRayTraceSegmentId: unique symbol;
};
