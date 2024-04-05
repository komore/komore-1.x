import { type AwsRegion } from '../region/aws-region';

/**
 * AWS API client URL strategy parameters
 */
export interface AwsApiClientUrlStrategyParameters {
  /**
   * AWS region
   */
  readonly region: AwsRegion;
  /**
   * Resource path
   */
  readonly resourcePath: string;
  /**
   * Search parameters
   */
  readonly searchParams?: URLSearchParams;
  /**
   * AWS service
   */
  readonly service: string;
}
