import { type AwsApiClient } from '@komore/aws';
import { type HttpClientResponse } from '@komore/http/client';

import { type S3ApiClientParameters } from './parameters/s3-api-client-parameters';
import { type S3ApiClientXmlResponseParameters } from './parameters/s3-api-client-xml-response-parameters';

/**
 * S3 API client
 */
export interface S3ApiClient extends AwsApiClient {
  <RootTag extends string, T, X>(parameters: S3ApiClientXmlResponseParameters<RootTag, T, X>): Observable<T>;
  <T>(parameters: S3ApiClientParameters<T> & { readonly response: true }): Observable<HttpClientResponse>;
}
