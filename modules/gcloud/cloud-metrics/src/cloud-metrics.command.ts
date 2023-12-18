import { createCommandType } from '@komore/command';

import { cloudMetricsDomain } from './cloud-metrics.domain';

/**
 * Cloud Metrics command
 */
export const cloudMetricsCommand = createCommandType(cloudMetricsDomain, {});
