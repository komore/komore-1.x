import { type S3ObjectVersionId } from './version/id/s3-object-version-id';

/**
 * Delete S3 object result
 *
 * @see {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html#API_DeleteObject_ResponseElements DeleteObject Response Elements}
 */
export interface DeleteS3ObjectResult {
  /**
   * Whether the specified object version that was permanently deleted was a delete marker
   */
  readonly DeleteMarker?: boolean;
  /**
   * Whether the requester was charged for the request
   */
  readonly RequestCharged?: 'requester';
  /**
   * Version identifier of the delete marker
   */
  readonly VersionId?: S3ObjectVersionId;
}
