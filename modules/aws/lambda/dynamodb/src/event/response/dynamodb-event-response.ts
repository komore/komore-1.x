import { type DynamoDBEventResponseBatchItemFailure } from './dynamodb-event-response-batch-item-failure';

/**
 * DynamoDB event response
 */
export interface DynamoDBEventResponse {
  /**
   * Batch item failures
   *
   * @see {@link https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-ddb-batchfailurereporting Reporting batch item failures}
   */
  readonly batchItemFailures: ReadonlyArray<DynamoDBEventResponseBatchItemFailure>;
}
