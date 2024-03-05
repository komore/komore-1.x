import { type HashAlgorithm } from '@komore/cryptography';

import { type AwsAccessKeyCredentials } from '../credentials/aws-access-key-credentials';

/**
 * AWS API client operation to HTTP client request options
 */
export interface AwsApiClientOperationToHttpClientRequestOptions {
  /**
   * Credentials
   */
  readonly credentials: AwsAccessKeyCredentials;
  /**
   * Hash algorithm
   */
  readonly hashAlgorithm: HashAlgorithm;
  /**
   * Host
   */
  readonly host: string;
}
