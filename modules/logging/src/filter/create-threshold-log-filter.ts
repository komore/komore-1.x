import { type LogEventSeverity } from '../event/log-event-severity';
import { type LogFilter } from './log-filter';

/**
 * Creates a threshold log filter
 *
 * @param logEventSeverity Log event severity
 * @returns Threshold log filter
 */
export function createThresholdLogFilter(logEventSeverity: LogEventSeverity): LogFilter {
  return ({ event: { severity } }) => (severity < logEventSeverity ? 'reject' : 'neutral');
}
