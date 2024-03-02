import { createMetricType, metricProperties } from '@komore/metrics';

import { functionDomain } from './function.domain';

/**
 * Function metric
 */
export const functionMetric = createMetricType(functionDomain, {
  calls: metricProperties<>(),
});
