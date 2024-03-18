import { type HttpClientResponse } from '@komore/http/client';

import { type S3ApiClientParameters } from './s3-api-client-parameters';
import { type S3ApiClientXmlResponseParameters } from './s3-api-client-xml-response-parameters';

/**
 * S3 API client
 */
export interface S3ApiClient {
  (parameters: S3ApiClientParameters & { readonly response: true }): Observable<HttpClientResponse>;
  <T, RootTag extends string = ''>(parameters: S3ApiClientXmlResponseParameters<RootTag>): Observable<T>;
}
