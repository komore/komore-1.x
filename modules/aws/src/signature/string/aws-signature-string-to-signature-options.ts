import { type HashAlgorithm } from '@komore/cryptography';

/**
 * AWS signature string to signature options
 */
export interface AwsSignatureStringToSignatureOptions {
  /**
   * Hash algorithm
   */
  readonly hashAlgorithm: HashAlgorithm;
  /**
   * Secret access key
   */
  readonly secretAccessKey: string;
  /**
   * AWS service
   */
  readonly service: string;
}
