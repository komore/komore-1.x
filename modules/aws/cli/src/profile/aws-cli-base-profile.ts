import { type AwsRegion } from '@komore/aws';

/**
 * AWS CLI base profile
 */
export interface AwsCliBaseProfile {
  /**
   * Profile name
   */
  readonly name: string;
  /**
   * Region
   */
  readonly region: AwsRegion;
}
