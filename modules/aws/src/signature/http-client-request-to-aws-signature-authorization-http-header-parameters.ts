import { type HttpClientRequest } from '@komore/http/client';

/**
 * HTTP client request to AWS signature HTTP header parameters
 */
export interface HttpClientRequestToAwsSignatureAuthorizationHttpHeaderParameters {
  /**
   * Date-time
   */
  readonly dateTime: Temporal.PlainDateTime;
  /**
   * HTTP client request
   */
  readonly httpClientRequest: HttpClientRequest;
}
