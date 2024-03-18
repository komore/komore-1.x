/**
 * Send SQS message batch result error entry
 *
 * @see {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_BatchResultErrorEntry.html BatchResultErrorEntry}
 */
export interface SendSqsMessageBatchResultErrorEntry {
  /**
   * Error code
   */
  readonly Code: string; // TODO: typed?
  /**
   * Message identifier within the batch
   */
  readonly Id: string; // TODO: typed?
  /**
   * Error message
   */
  readonly Message?: string;
  /**
   * Whether the error happened due to the caller
   */
  readonly SenderFault: boolean;
}
