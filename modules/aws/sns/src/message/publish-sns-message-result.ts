import { type SnsMessageId } from './id/sns-message-id';

/**
 * Publish SNS message
 *
 * @see {@link https://docs.aws.amazon.com/sns/latest/api/API_Publish.html#API_Publish_ResponseElements Publish Response Elements}
 */
export interface PublishSnsMessageResult {
  /**
   * Message identifier
   */
  readonly MessageId: SnsMessageId;
  /**
   * Sequence number
   *
   * @note Only applies to FIFO topics
   */
  readonly SequenceNumber: string;
}
