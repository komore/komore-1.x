import { type XRayApiClient } from '../../x-ray-api-client';
import { type PutXRayTraceSegmentsParameters } from './put-x-ray-trace-segments-parameters';
import { type PutXRayTraceSegmentsResult } from './put-x-ray-trace-segments-result';

/**
 * Creates a function that puts X-Ray trace segments
 *
 * @param apiClient X-Ray API client
 * @returns Function that puts X-Ray trace segments
 * @see {@link https://docs.aws.amazon.com/xray/latest/api/API_PutTraceSegments.html PutTraceSegments}
 */
export function putXRayTraceSegments(
  apiClient: XRayApiClient
): (parameters: PutXRayTraceSegmentsParameters) => Observable<PutXRayTraceSegmentsResult> {
  const operation = 'PutTraceSegments';
  const resourcePath = 'TraceSegments';
  return parameters => apiClient({ operation, parameters, resourcePath });
}
