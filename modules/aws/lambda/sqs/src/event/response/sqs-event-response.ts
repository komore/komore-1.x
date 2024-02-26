import { type SqsEventResponseBatchItemFailure } from './sqs-event-response-batch-item-failure';

/**
 * SQS event response
 */
export interface SqsEventResponse {
  /**
   * Batch item failures
   *
   * @see {@link https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#services-sqs-batchfailurereporting Implementing partial batch responses}
   */
  readonly batchItemFailures: ReadonlyArray<SqsEventResponseBatchItemFailure>;
}
