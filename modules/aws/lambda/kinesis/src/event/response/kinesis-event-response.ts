import { type KinesisEventResponseBatchItemFailure } from './kinesis-event-response-batch-item-failure';

/**
 * Kinesis event response
 */
export interface KinesisEventResponse {
  /**
   * Batch item failures
   *
   * @see {@link https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-batchfailurereporting Reporting batch item failures}
   */
  readonly batchItemFailures: ReadonlyArray<KinesisEventResponseBatchItemFailure>;
}
