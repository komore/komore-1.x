import { map } from '@komore/reactive';

import { createS3BypassGovernanceRetentionHttpHeader } from '../header/create-s3-bypass-governance-retention-http-header';
import { createS3ExpectedBucketOwnerHttpHeader } from '../header/create-s3-expected-bucket-owner-http-header';
import { createS3MfaHttpHeader } from '../header/create-s3-mfa-http-header';
import { httpHeadersToS3ResponseElements } from '../header/http-headers-to-s3-response-elements';
import { type S3ApiClient } from '../s3-api-client';
import { createS3RequestPayerHttpHeader } from '../header/create-s3-request-payer-http-header';
import { type DeleteS3ObjectParameters } from './delete-s3-object-parameters';
import { type DeleteS3ObjectResult } from './delete-s3-object-result';

/**
 * Creates a function that deletes an S3 object
 *
 * @param apiClient S3 API client
 * @returns Function that deletes an S3 object
 * @see {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html DeleteObject}
 * @note Requires the `s3:DeleteObject` permission
 * @note Requires the `s3:DeleteObjectVersion` permission when deleting a specific object version
 * @note Requires the `s3:BypassGovernanceRetention` permission when attempting to bypass governance retention
 */
export function deleteS3Object(
  apiClient: S3ApiClient
): (parameters: DeleteS3ObjectParameters) => Observable<DeleteS3ObjectResult> {
  const method = 'DELETE';
  const operation = 'DeleteObject';
  const toResponseElements = httpHeadersToS3ResponseElements(
    'x-amz-delete-marker',
    'x-amz-request-charged',
    'x-amz-version-id'
  );
  return parameters => {
    const {
      Bucket,
      BypassGovernanceRetention = false,
      ExpectedBucketOwner,
      Key,
      Mfa,
      RequestPayer = false,
      VersionId,
    } = parameters;
    const searchParams = new URLSearchParams(VersionId !== undefined ? { versionId: VersionId ?? 'null' } : {});
    const resourcePath = Key;
    const headers = [
      ...(Mfa ? [createS3MfaHttpHeader(Mfa.DeviceSerialNumber, Mfa.Value)] : []),
      ...(RequestPayer ? [createS3RequestPayerHttpHeader()] : []),
      ...(BypassGovernanceRetention ? [createS3BypassGovernanceRetentionHttpHeader()] : []),
      ...(ExpectedBucketOwner ? [createS3ExpectedBucketOwnerHttpHeader(ExpectedBucketOwner)] : []),
    ];
    return apiClient({
      Bucket,
      headers,
      method,
      operation,
      resourcePath,
      response: true,
      searchParams,
    }).pipe(map(({ headers }) => headers.reduce(toResponseElements, {})));
  };
}
