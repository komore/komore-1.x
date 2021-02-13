import type { LogEventSeverity } from '../log-event-severity';

/**
 * Timestamp severity layout options
 */
export interface TimestampSeverityLayoutOptions {
  readonly severityNames?: ReadonlyMap<LogEventSeverity, string>;
}
