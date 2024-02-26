import { type SqsMessageId } from '@komore/aws/sqs';

/**
 * SQS event response batch item failure
 */
export interface SqsEventResponseBatchItemFailure {
  /**
   * Item identifier
   */
  readonly itemIdentifier: SqsMessageId;
}
