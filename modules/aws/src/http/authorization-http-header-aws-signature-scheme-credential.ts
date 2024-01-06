import { type Temporal } from '@komore/temporal';

/**
 * Authorization HTTP header AWS signature scheme credential
 */
export interface AuthorizationHttpHeaderAwsSignatureSchemeCredential {
  /**
   * Access key identifier
   */
  readonly accessKeyId: string;
  /**
   * AWS region
   */
  readonly awsRegion: string;
  /**
   * AWS service
   */
  readonly awsService: string;
  /**
   * Date
   */
  readonly date: Temporal.PlainDate;
}
