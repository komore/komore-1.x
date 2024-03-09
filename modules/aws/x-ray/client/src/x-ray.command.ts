import { xRayDomain, type PutXRayTraceSegmentsParameters } from '@komore/aws/x-ray';
import { commandProperties, createCommandType } from '@komore/command';

/**
 * X-Ray command
 */
export const xRayCommand = createCommandType(xRayDomain, {
  /**
   * Uploads segment documents
   *
   * @see {@link https://docs.aws.amazon.com/xray/latest/api/API_PutTraceSegments.html PutTraceSegments}
   */
  putTraceSegments: commandProperties<PutXRayTraceSegmentsParameters>(),
});
