import { type LogEventSeverity } from '../definition/log-event-severity';
import { type Filter } from './filter';
import { FilterResult } from './filter-result';
import { type SeverityFilterOptions } from './severity-filter-options';

/**
 * Creates a severity filter
 * @param logEventSeverity Log event severity
 * @param options Severity filter options
 * @returns Severity filter
 */
export function createSeverityFilter(logEventSeverity: LogEventSeverity, options?: SeverityFilterOptions): Filter {
  const onMatch = options?.onMatch ?? FilterResult.ACCEPT;
  const onMismatch = options?.onMismatch ?? FilterResult.REJECT;
  return ({ logEvent: { severity } }) => (severity === logEventSeverity ? onMatch : onMismatch);
}
