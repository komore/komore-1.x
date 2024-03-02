import { type HashAlgorithm } from '@komore/cryptography';

import { type AwsRegion } from '../../region/aws-region';

/**
 * AWS signature string to signature options
 */
export interface AwsSignatureStringToSignatureOptions {
  /**
   * Hash algorithm
   */
  readonly hashAlgorithm: HashAlgorithm;
  /**
   * AWS region
   */
  readonly region: AwsRegion;
  /**
   * Secret access key
   */
  readonly secretAccessKey: string;
  /**
   * AWS service
   */
  readonly service: string;
}
