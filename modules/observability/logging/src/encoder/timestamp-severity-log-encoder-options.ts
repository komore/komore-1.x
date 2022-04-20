import { type LogEventSeverity } from '../definition/log-event-severity';

/**
 * Timestamp severity log encoder options
 */
export interface TimestampSeverityLogEncoderOptions {
  readonly severityNames?: ReadonlyMap<LogEventSeverity, string>;
}
