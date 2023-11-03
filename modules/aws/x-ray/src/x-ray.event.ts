import { type PutTraceSegmentsCommandOutput } from '@aws-sdk/client-xray';

import { createAwsEventType } from '@komore/aws';
import { eventProperties } from '@komore/event';

import { xRayDomain } from './x-ray.domain';

/**
 * X-Ray event
 */
export const xRayEvent = createAwsEventType(xRayDomain, {
  /**
   * Segment documents have been uploaded
   *
   * @see {@link https://docs.aws.amazon.com/xray/latest/api/API_PutTraceSegments.html PutTraceSegments}
   */
  traceSegmentsUploaded: eventProperties<PutTraceSegmentsCommandOutput>(),
});
