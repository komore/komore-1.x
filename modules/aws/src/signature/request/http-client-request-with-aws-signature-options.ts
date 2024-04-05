import { type HashAlgorithm } from '@komore/cryptography';

import { type AwsCredentials } from '../../credentials/aws-credentials';
import { type AwsSignatureAlgorithm } from '../algorithm/aws-signature-algorithm';
import { type AwsApiClientSignatureStrategy } from '../aws-api-client-signature-strategy';

/**
 * HTTP client request with AWS signature options
 */
export interface HttpClientRequestWithAwsSignatureOptions {
  /**
   * AWS signature algorithm
   */
  readonly algorithm: AwsSignatureAlgorithm;
  /**
   * AWS credentials
   */
  readonly credentials: AwsCredentials;
  /**
   * Hash algorithm
   */
  readonly hashAlgorithm: HashAlgorithm;
  /**
   * Signature strategy
   */
  readonly strategy: AwsApiClientSignatureStrategy;
  /**
   * AWS service
   */
  readonly service: string;
}
