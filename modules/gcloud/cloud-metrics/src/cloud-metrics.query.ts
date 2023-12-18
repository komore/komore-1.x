import { createQueryType } from '@komore/query';

import { cloudMetricsDomain } from './cloud-metrics.domain';

/**
 * Cloud Metrics query
 */
export const cloudMetricsQuery = createQueryType(cloudMetricsDomain, {});
