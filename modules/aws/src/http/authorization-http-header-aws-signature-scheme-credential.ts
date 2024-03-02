import { type AwsRegion } from '../region/aws-region';

/**
 * Authorization HTTP header AWS signature scheme credential
 */
export interface AuthorizationHttpHeaderAwsSignatureSchemeCredential {
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
