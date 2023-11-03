import { type PutTraceSegmentsCommandInput } from '@aws-sdk/client-xray';

import { createAwsCommandType } from '@komore/aws';
import { commandProperties } from '@komore/command';

import { xRayDomain } from './x-ray.domain';

/**
 * X-Ray command
 */
export const xRayCommand = createAwsCommandType(xRayDomain, {
  /**
   * Uploads segment documents
   *
   * @see {@link https://docs.aws.amazon.com/xray/latest/api/API_PutTraceSegments.html PutTraceSegments}
   */
  putTraceSegments: commandProperties<PutTraceSegmentsCommandInput>(),
});
