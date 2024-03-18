/**
 * Receive SQS message parameters
 *
 * @see {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ReceiveMessage.html#API_ReceiveMessage_RequestParameters ReceiveMessage Request Parameters}
 */
export interface ReceiveSqsMessageParameters {
  /**
   * Maximum number of messages to return
   */
  readonly MaxNumberOfMessages?: number;
}
