import { type LogFilter } from './log-filter';
import { type ThresholdLogFilterOptions } from './threshold-log-filter-options';

/**
 * Creates a threshold log filter
 *
 * @param filterOptions Threshold log filter options
 * @returns Threshold log filter
 */
export function thresholdLogFilter(filterOptions: ThresholdLogFilterOptions): LogFilter {
  const { minimumSeverity } = filterOptions;
  return ({ event: { severity } }) => (severity < minimumSeverity ? 'reject' : 'neutral');
}
