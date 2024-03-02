import { type CloudFunctionsHttpInternalRequest } from './event/cloud-functions-http-internal-request';
import { type CloudFunctionsHttpInternalResponse } from './event/cloud-functions-http-internal-response';

/**
 * Cloud Functions HTTP function parameters
 */
export type CloudFunctionsHttpFunctionParameters = readonly [
  request: CloudFunctionsHttpInternalRequest,
  response: CloudFunctionsHttpInternalResponse,
];
