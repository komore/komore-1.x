import { type AwsRegion } from '../../region/aws-region';

/**
 * AWS canonical request hash to signature string parameters
 */
export interface AwsCanonicalRequestHashToSignatureStringParameters {
  /**
   * Canonical request hash
   */
  readonly canonicalRequestHash: string;
  /**
   * Date time
   */
  readonly dateTime: Temporal.PlainDateTime;
  /**
   * AWS region
   */
  readonly region: AwsRegion;
}
