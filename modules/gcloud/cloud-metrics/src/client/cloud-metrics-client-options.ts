import { type MetricServiceClient } from '@google-cloud/monitoring';

/**
 * Cloud Metrics client options
 */
export interface CloudMetricsClientOptions extends NonNullable<ConstructorParameters<typeof MetricServiceClient>[0]> {}
