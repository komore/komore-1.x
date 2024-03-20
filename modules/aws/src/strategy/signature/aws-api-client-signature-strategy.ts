import { type AwsSignature } from '../../signature/aws-signature';

/**
 * AWS API client signature strategy
 */
export interface AwsApiClientSignatureStrategy {
  (signature: AwsSignature): unknown;
}
