import type { UntypedLogEventRecord } from '../log-event-record';
import type { LogEventSeverity } from '../log-event-severity';
import type { Filter } from './filter';
import { FilterResult } from './filter-result';

/**
 * Creates a threshold filter
 * @param logEventSeverity Log event severity
 * @returns Threshold filter
 */
export function createThresholdFilter(logEventSeverity: LogEventSeverity): Filter<UntypedLogEventRecord> {
  return ({ logEvent: { severity } }) => (severity < logEventSeverity ? FilterResult.REJECT : FilterResult.NEUTRAL);
}
