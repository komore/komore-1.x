import { type AwsRegion } from '../region/aws-region';
import { type AwsApiClientUrlStrategy } from '../url/aws-api-client-url-strategy';

/**
 * AWS API client parameters to URL options
 */
export interface AwsApiClientParametersToUrlOptions {
  /**
   * Default region
   */
  readonly defaultRegion: AwsRegion;
  /**
   * Service
   */
  readonly service: string;
  /**
   * URL strategy
   */
  readonly urlStrategy: AwsApiClientUrlStrategy;
}
