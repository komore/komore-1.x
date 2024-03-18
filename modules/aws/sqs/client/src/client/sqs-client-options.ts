import { type SqsApiClient } from '@komore/aws/sqs';

/**
 * SQS client options
 */
export interface SqsClientOptions {
  /**
   * SQS API client
   */
  readonly apiClient: SqsApiClient;
}
