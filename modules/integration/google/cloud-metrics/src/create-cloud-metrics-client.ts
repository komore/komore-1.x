import { MetricServiceClient } from '@google-cloud/monitoring';

/**
 * Creates a Cloud Metrics client
 * @param options Options
 * @returns Cloud Metrics client
 */
export function createCloudMetricsClient(options?: ConstructorParameters<typeof MetricServiceClient>[0]): MetricServiceClient {
  return new MetricServiceClient(options);
}
