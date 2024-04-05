import { type AwsRegion } from '../../region/aws-region';

/**
 * AWS signature string to signature parameters
 */
export interface AwsSignatureStringToSignatureParameters {
  /**
   * Date
   */
  readonly date: Temporal.PlainDate;
  /**
   * AWS region
   */
  readonly region: AwsRegion;
  /**
   * Signature string
   */
  readonly signatureString: string;
}
