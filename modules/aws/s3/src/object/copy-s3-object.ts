import { type S3ApiClient } from '../s3-api-client';
import { type CopyS3ObjectParameters } from './copy-s3-object-parameters';
import { type CopyS3ObjectResult } from './copy-s3-object-result';

/**
 * Creates a function that copies an S3 object
 *
 * @param apiClient S3 API client
 * @returns Function that copies an S3 object
 * @see {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html CopyObject}
 */
export function copyS3Object(
  apiClient: S3ApiClient
): (parameters: CopyS3ObjectParameters) => Observable<CopyS3ObjectResult> {
  const method = 'PUT';
  const operation = 'CopyObject';
  return parameters => {
    const { Key } = parameters;
    const resourcePath = `/${Key}`;
    return apiClient({
      mapResponseHeaders: {
        // TODO
      },
      method,
      resourcePath,
      operation,
      parameters,
      rootTag: 'CopyObjectResult',
    });
  };
}
