import { type LogFilter } from './log-filter';
import { type SeverityLogFilterOptions } from './severity-log-filter-options';

/**
 * Creates a severity log filter
 *
 * @param filterOptions Severity log filter options
 * @returns Severity log filter
 */
export function severityLogFilter(filterOptions: SeverityLogFilterOptions): LogFilter {
  const { onMatch = 'accept', onMismatch = 'reject', severity: expectedSeverity } = filterOptions;
  return ({ event: { severity } }) => (severity === expectedSeverity ? onMatch : onMismatch);
}
