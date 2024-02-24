import { isDefined } from '@komore/functional';

import { createS3BypassGovernanceRetentionHttpHeader } from '../header/create-s3-bypass-governance-retention-http-header';
import { createS3ExpectedBucketOwnerHttpHeader } from '../header/create-s3-expected-bucket-owner-http-header';
import { createS3MfaHttpHeader } from '../header/create-s3-mfa-http-header';
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
  return parameters => {
    const {
      bucketName,
      bypassGovernanceRetention = false,
      expectedBucketOwner,
      key,
      mfa,
      requestPayer = false,
      versionId,
    } = parameters;
    const urlSearchParams = new URLSearchParams(versionId !== undefined ? { versionId: versionId ?? 'null' } : {});
    const resourcePath = `/${key}?${urlSearchParams}`;
    const httpHeaders = [
      mfa ? createS3MfaHttpHeader(mfa.deviceSerialNumber, mfa.value) : undefined,
      requestPayer ? createS3RequestPayerHttpHeader() : undefined,
      bypassGovernanceRetention ? createS3BypassGovernanceRetentionHttpHeader() : undefined,
      expectedBucketOwner !== undefined ? createS3ExpectedBucketOwnerHttpHeader(expectedBucketOwner) : undefined,
    ].filter(isDefined);
    return apiClient(bucketName, 'DELETE', resourcePath, httpHeaders);
  };
}
