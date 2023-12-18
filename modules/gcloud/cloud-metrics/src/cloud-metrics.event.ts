import { createEventType } from '@komore/event';

import { cloudMetricsDomain } from './cloud-metrics.domain';

/**
 * Cloud Metrics event
 */
export const cloudMetricsEvent = createEventType(cloudMetricsDomain, {});
