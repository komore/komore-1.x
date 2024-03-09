import { type KmsAliasArn, type KmsAliasName, type KmsKeyArn } from '@komore/aws/kms';
import { type UUID } from '@komore/uuid';

import { type KinesisRecordEncryptionType } from '../encryption/kinesis-record-encryption-type';
import { type KinesisStreamArn } from './arn/kinesis-stream-arn';
import { type KinesisStreamEnhancedMetrics } from './metrics/kinesis-stream-enhanced-metrics';
import { type KinesisStreamModeDetails } from './mode/kinesis-stream-mode-details';
import { type KinesisStreamName } from './name/kinesis-stream-name';
import { type KinesisStreamStatus } from './status/kinesis-stream-status';

/**
 * Kinesis stream description summary
 *
 * @see {@link https://docs.aws.amazon.com/kinesis/latest/APIReference/API_StreamDescriptionSummary.html StreamDescriptionSummary}
 */
export interface KinesisStreamDescriptionSummary {
  /**
   * Number of enhanced fan-out consumers
   */
  readonly ConsumerCount: number;
  /**
   * Encryption type
   */
  readonly EncryptionType?: KinesisRecordEncryptionType;
  /**
   * Enhanced monitoring settings
   */
  readonly EnhancedMonitoring: ReadonlyArray<KinesisStreamEnhancedMetrics>;
  /**
   * Key identifier
   */
  readonly KeyId?: KmsAliasArn | KmsAliasName | KmsKeyArn | UUID | 'alias/aws/kinesis';
  /**
   * Number of open shards in the stream
   */
  readonly OpenShardCount: number;
  /**
   * Retention period in hours
   */
  readonly RetentionPeriodHours: number;
  /**
   * Stream ARN
   */
  readonly StreamARN: KinesisStreamArn;
  /**
   * Stream creation timestamp
   */
  readonly StreamCreationTimestamp: number;
  /**
   * Stream capacity mode: on-demand or provisioned
   */
  readonly StreamModeDetails: KinesisStreamModeDetails;
  /**
   * Stream name
   */
  readonly StreamName: KinesisStreamName;
  /**
   * Steam status
   */
  readonly StreamStatus: KinesisStreamStatus;
}
