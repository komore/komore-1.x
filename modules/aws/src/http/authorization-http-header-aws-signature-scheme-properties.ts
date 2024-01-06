import { type AuthorizationHttpHeaderAwsSignatureSchemeCredential } from './authorization-http-header-aws-signature-scheme-credential';

/**
 * Authorization HTTP header AWS signature scheme properties
 */
export interface AuthorizationHttpHeaderAwsSignatureSchemeProperties {
  /**
   * Credential
   */
  readonly credential: AuthorizationHttpHeaderAwsSignatureSchemeCredential;
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
