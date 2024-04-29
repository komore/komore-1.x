import { httpClientResponseToBlob } from '@komore/http/client';
import { map, mergeMap } from '@komore/reactive';

import { type S3ApiClient } from '../s3-api-client';
import { type GetS3ObjectParameters } from './get-s3-object-parameters';
import { type GetS3ObjectResult } from './get-s3-object-result';

/**
 * Creates a function that returns an S3 object
 *
 * @param apiClient S3 API client
 * @returns Function that returns an S3 object
 * @see {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html GetObject}
 */
export function getS3Object(
  apiClient: S3ApiClient
): (parameters: GetS3ObjectParameters) => Observable<GetS3ObjectResult> {
  const operation = 'GetObject';
  const toBlob = httpClientResponseToBlob();
  return ({ Bucket, Key }) =>
    apiClient({
      Bucket,
      operation,
      resourcePath: Key,
      response: true,
    }).pipe(
      mergeMap(response => {
        return toBlob(response).pipe(
          map(Body => ({
            Body,
          }))
        );
      })
    );
}
