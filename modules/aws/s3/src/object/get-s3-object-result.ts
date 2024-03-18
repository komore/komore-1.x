/**
 * Get S3 object result
 *
 * @see {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html#API_GetObject_ResponseElements}
 */
export interface GetS3ObjectResult {
  // TODO: accept-ranges, Cache-Control
  // TODO: Content-Disposition, Content-Encoding, Content-Language, Content-Length, Content-Range, Content-Type
  // TODO: ETag, Expires, Last-Modified
  // TODO: x-amz-checksum-crc32, x-amz-checksum-crc32c, x-amz-checksum-sha1, x-amz-checksum-sha256,
  // TODO: x-amz-delete-marker, x-amz-expiration, x-amz-missing-meta, x-amz-mp-parts-count
  // TODO: x-amz-object-lock-legal-hold, x-amz-object-lock-mode, x-amz-object-lock-retain-until-date
  // TODO: x-amz-replication-status, x-amz-request-charged, x-amz-restore
  // TODO: x-amz-server-side-encryption, x-amz-server-side-encryption-aws-kms-key-id, x-amz-server-side-encryption-bucket-key-enabled
  // TODO: x-amz-server-side-encryption-customer-algorithm, x-amz-server-side-encryption-customer-key-MD5
  // TODO: x-amz-storage-class, x-amz-tagging-count, x-amz-version-id, x-amz-website-redirect-location
  /**
   * Body
   */
  readonly Body: Blob;
}
