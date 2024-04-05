import { type AwsCredentials } from '../credentials/aws-credentials';
import { type AwsRegion } from '../region/aws-region';
import { type AwsSignatureAlgorithm } from './algorithm/aws-signature-algorithm';
import { type AwsSignature } from './aws-signature';

/**
 * AWS API client signature strategy parameters
 */
export interface AwsApiClientSignatureStrategyParameters {
  /**
   * AWS signature algorithm
   */
  readonly algorithm: AwsSignatureAlgorithm;
  /**
   * AWS credentials
   */
  readonly credentials: AwsCredentials;
  /**
   * Date and time
   */
  readonly dateTime: Temporal.PlainDateTime;
  /**
   * AWS region
   */
  readonly region: AwsRegion;
  /**
   * Service
   */
  readonly service: string;
  /**
   * AWS signature
   */
  readonly signature: AwsSignature;
}
