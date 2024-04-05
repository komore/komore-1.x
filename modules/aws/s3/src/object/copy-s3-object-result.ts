import { type Sha1String, type Sha256String } from '@komore/cryptography';
import { type DateTimeString } from '@komore/temporal';

/**
 * Copy S3 object result
 *
 * @see {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html#API_CopyObject_ResponseElements CopyObject Response Elements}
 */
export interface CopyS3ObjectResult {
  /**
   * TODO
   */
  readonly ChecksumCRC32: string; // TODO: typed
  /**
   * TODO
   */
  readonly ChecksumCRC32C: string; // TODO: typed
  /**
   * Base64-encoded, 160-bit SHA-1 digest
   */
  readonly ChecksumSHA1: Sha1String;
  /**
   * Base64-encoded 256-bit SHA-256 digest
   */
  readonly ChecksumSHA256: Sha256String;
  /**
   * TODO
   */
  readonly ETag: string; // TODO: typed (@komore/http package)
  /**
   * Creation time
   */
  readonly LastModified: DateTimeString;
}
