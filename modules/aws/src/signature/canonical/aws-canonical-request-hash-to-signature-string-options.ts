import { type AwsSignatureAlgorithm } from '../algorithm/aws-signature-algorithm';

/**
 * AWS canonical request hash to signature string options
 */
export interface AwsCanonicalRequestHashToSignatureStringOptions {
  /**
   * AWS signature algorithm
   */
  readonly algorithm: AwsSignatureAlgorithm;

  /**
   * AWS service
   */
  readonly service: string;
}
