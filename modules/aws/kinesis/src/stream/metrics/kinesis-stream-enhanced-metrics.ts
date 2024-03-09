import { type KinesisStreamEnhancedMetricsLevel } from './kinesis-stream-enhanced-metrics-level';

/**
 * Kinesis stream enhanced metrics
 *
 * @see {@link https://docs.aws.amazon.com/kinesis/latest/APIReference/API_EnhancedMetrics.html EnhancedMetrics}
 */
export interface KinesisStreamEnhancedMetrics {
  /**
   * List of shard-level metrics
   */
  readonly ShardLevelMetrics: ReadonlyArray<KinesisStreamEnhancedMetricsLevel>;
}
