import { type AwsRegion } from '../../region/aws-region';

/**
 * AWS canonical request hash to signature string options
 */
export interface AwsCanonicalRequestHashToSignatureStringOptions {
  /**
   * Algorithm
   */
  readonly algorithm: 'AWS4-HMAC-SHA256';
  /**
   * AWS region
   */
  readonly region: AwsRegion;
  /**
   * AWS service
   */
  readonly service: string;
}
