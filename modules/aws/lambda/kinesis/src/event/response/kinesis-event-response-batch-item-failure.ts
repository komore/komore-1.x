import { type KinesisMessageId } from '@komore/aws/kinesis';

/**
 * Kinesis event response batch item failure
 */
export interface KinesisEventResponseBatchItemFailure {
  /**
   * Item identifier
   */
  readonly itemIdentifier: KinesisMessageId;
}
