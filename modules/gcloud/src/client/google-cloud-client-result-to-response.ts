import { type GoogleCloudClientResult } from './google-cloud-client-result';

/**
 * Returns a response, given a Google Cloud client result
 *
 * @param clientResult Google Cloud client result
 * @returns Response
 */
export function googleCloudClientResultToResponse<ResponseType>(
  clientResult: GoogleCloudClientResult<ResponseType, unknown, unknown>
): ResponseType {
  const [response] = clientResult;
  return response;
}
