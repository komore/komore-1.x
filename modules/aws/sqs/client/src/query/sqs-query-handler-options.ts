import { type SqsApiClient } from '@komore/aws/sqs';

/**
 * SQS query handler options
 */
export interface SqsQueryHandlerOptions {
  /**
   * SQS API client
   */
  readonly apiClient: SqsApiClient;
}
