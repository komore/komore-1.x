import { type HttpClientRequest } from '@komore/http/client';

import { type AwsRegion } from '../../region/aws-region';

/**
 * HTTP client request with AWS signature options
 */
export interface HttpClientRequestWithAwsSignatureParameters {
  /**
   * Current date and time
   */
  readonly dateTime: Temporal.PlainDateTime;
  /**
   * HTTP client request
   */
  readonly httpClientRequest: HttpClientRequest;
  /**
   * AWS region
   */
  readonly region: AwsRegion;
}
