import { type SqsMessage } from './sqs-message';

/**
 * Receive SQS message result
 *
 * @see {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ReceiveMessage.html#API_ReceiveMessage_ResponseElements ReceiveMessage Response Elements}
 */
export interface ReceiveSqsMessageResult {
  /**
   * List of messages
   */
  readonly Messages: ReadonlyArray<SqsMessage>;
}
