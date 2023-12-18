import { createErrorType } from '@komore/error';

import { cloudMetricsDomain } from './cloud-metrics.domain';

/**
 * Cloud Metrics error
 */
export const cloudMetricsError = createErrorType(cloudMetricsDomain, {});
