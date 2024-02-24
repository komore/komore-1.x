import { type AwsApiClient } from '@komore/aws';
import { type HttpHeader } from '@komore/http';

/**
 * S3 API client
 */
export interface S3ApiClient extends AwsApiClient {
  <T>(
    bucketName: string,
    method: 'DELETE' | 'GET',
    resourcePath: string,
    headers: ReadonlyArray<HttpHeader>
  ): Observable<T>;
  <T>(
    bucketName: string,
    method: 'PUT' | 'POST',
    resourcePath: string,
    headers: ReadonlyArray<HttpHeader>,
    payload: unknown
  ): Observable<T>;
}
