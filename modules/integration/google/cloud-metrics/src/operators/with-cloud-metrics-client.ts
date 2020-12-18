import { MetricServiceClient } from '@google-cloud/monitoring';

/**
 * Adds a Cloud Metrics client to a message
 * @param cloudMetricsClient Cloud Metrics client
 * @returns Operator function that turns a message into a message with a Cloud Metrics client
 */
export function withCloudMetricsClient(cloudMetricsClient?: MetricServiceClient) {
  cloudMetricsClient ??= new MetricServiceClient();
}
