import { type kinesisStreamEnhancedMetricsLevels } from './kinesis-stream-enhanced-metrics-levels';

/**
 * Kinesis stream enhanced metrics level
 *
 * @see {@link https://docs.aws.amazon.com/kinesis/latest/APIReference/API_EnhancedMetrics.html EnhancedMetrics}
 */
export type KinesisStreamEnhancedMetricsLevel = (typeof kinesisStreamEnhancedMetricsLevels)[number];
