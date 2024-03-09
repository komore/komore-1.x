import { xRayDomain, type PutXRayTraceSegmentsResult } from '@komore/aws/x-ray';
import { createEventType, eventProperties } from '@komore/event';

/**
 * X-Ray event
 */
export const xRayEvent = createEventType(xRayDomain, {
  /**
   * Segment documents have been uploaded
   *
   * @see {@link https://docs.aws.amazon.com/xray/latest/api/API_PutTraceSegments.html PutTraceSegments}
   */
  traceSegmentsUploaded: eventProperties<PutXRayTraceSegmentsResult>(),
});
