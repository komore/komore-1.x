import { type AwsRegion } from '../../region/aws-region';

/**
 * AWS signature credential string parameters
 */
export interface AwsSignatureCredentialStringParameters {
  /**
   * Access key identifier
   */
  readonly accessKeyId: string;
  /**
   * Date
   */
  readonly date: Temporal.PlainDate;
  /**
   * AWS region
   */
  readonly region: AwsRegion;
  /**
   * Service
   */
  readonly service: string;
}
