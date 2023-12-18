import { type Client } from '@komore/client';

import { type cloudMetricsCommand } from '../cloud-metrics.command';
import { type cloudMetricsEvent } from '../cloud-metrics.event';
import { type cloudMetricsQuery } from '../cloud-metrics.query';
import { type cloudMetricsError } from '../cloud-metrics.error';

/**
 * Cloud Metrics client
 */
export type CloudMetricsClient = Client<
  typeof cloudMetricsCommand,
  typeof cloudMetricsEvent,
  typeof cloudMetricsQuery,
  typeof cloudMetricsError,
  typeof cloudMetricsCommandEventMap
>;
