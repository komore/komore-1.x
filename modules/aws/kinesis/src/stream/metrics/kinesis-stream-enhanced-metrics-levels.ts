/**
 * Kinesis stream enhanced metrics levels
 *
 * @see {@link https://docs.aws.amazon.com/kinesis/latest/APIReference/API_EnhancedMetrics.html EnhancedMetrics}
 */
export const kinesisStreamEnhancedMetricsLevels = [
  'ALL',
  'IncomingBytes',
  'IncomingRecords',
  'IteratorAgeMilliseconds',
  'OutgoingBytes',
  'OutgoingRecords',
  'ReadProvisionedThroughputExceeded',
  'WriteProvisionedThroughputExceeded',
] as const;
