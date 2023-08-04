import { type LogEventSeverity } from '../event/log-event-severity';
import { type LogFilter } from './log-filter';
import { type SeverityLogFilterOptions } from './severity-log-filter-options';

/**
 * Creates a severity log filter
 *
 * @param logEventSeverity Log event severity
 * @param options Severity filter options
 * @returns Severity log filter
 */
export function createSeverityLogFilter(
  logEventSeverity: LogEventSeverity,
  options?: SeverityLogFilterOptions
): LogFilter {
  const onMatch = options?.onMatch ?? 'accept';
  const onMismatch = options?.onMismatch ?? 'reject';
  return ({ logEvent: { severity } }) => (severity === logEventSeverity ? onMatch : onMismatch);
}
