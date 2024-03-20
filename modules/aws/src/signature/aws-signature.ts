/**
 * AWS signature
 */
export interface AwsSignature {
  /**
   * Algorithm
   */
  readonly algorithm: 'AWS4-HMAC-SHA256';
  /**
   * 256-bit signature as 64 lowercase hexadecimal characters
   */
  readonly signature: string;
  /**
   * List of request headers used to compute the signature
   *
   * @note Header names must be lowercase
   */
  readonly signedHeaders: ReadonlyArray<string>;
}
