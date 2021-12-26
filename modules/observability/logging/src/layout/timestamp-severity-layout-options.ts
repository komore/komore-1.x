import { type LogEventSeverity } from '../definition/log-event-severity';

/**
 * Timestamp severity layout options
 */
export interface TimestampSeverityLayoutOptions {
  readonly severityNames?: ReadonlyMap<LogEventSeverity, string>;
}
