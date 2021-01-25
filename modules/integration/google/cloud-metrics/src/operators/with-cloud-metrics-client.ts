import { MetricServiceClient } from '@google-cloud/monitoring';
import { withGoogleCloudClient } from '@komore/integration-google';
import { createCloudMetricsClient } from '../create-cloud-metrics-client';

/**
 * Adds a Cloud Metrics client to a message
 * @param cloudMetricsClient Cloud Metrics client
 * @returns Operator function that turns a message into a message with a Cloud Metrics client
 */
export const withCloudMetricsClient = (cloudMetricsClient?: MetricServiceClient) =>
  withGoogleCloudClient('metrics', cloudMetricsClient ?? createCloudMetricsClient())
;
