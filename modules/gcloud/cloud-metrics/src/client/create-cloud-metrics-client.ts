import { MetricServiceClient } from '@google-cloud/monitoring';

import { createClient } from '@komore/client';

import { cloudMetricsCommand } from '../cloud-metrics.command';
import { cloudMetricsError } from '../cloud-metrics.error';
import { cloudMetricsEvent } from '../cloud-metrics.event';
import { cloudMetricsQuery } from '../cloud-metrics.query';
import { type CloudMetricsClient } from './cloud-metrics-client';
import { type CloudMetricsClientOptions } from './cloud-metrics-client-options';

/**
 * Creates a Cloud Metrics client
 *
 * @param clientOptions Cloud Metrics client options
 * @returns Cloud Metrics client
 */
export function createCloudMetricsClient(clientOptions: CloudMetricsClientOptions): CloudMetricsClient {
  const metricsService = new MetricServiceClient(clientOptions);
  return createClient({
    command: cloudMetricsCommand,
    commandEventMap: cloudMetricsCommandEventMap,
    commandHandler: events => createCloudMetricsCommandHandler({ events, metricsService }),
    error: cloudMetricsError,
    event: cloudMetricsEvent,
    query: cloudMetricsQuery,
    queryHandler: () => createCloudMetricsQueryHandler(),
  });
}
