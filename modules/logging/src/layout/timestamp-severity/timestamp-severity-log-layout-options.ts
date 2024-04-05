import { type LogEventSeverity } from '../../severity/log-event-severity';

/**
 * Timestamp severity log layout options
 */
export interface TimestampSeverityLogLayoutOptions {
  /**
   * Date and time formatter
   */
  readonly dateTimeFormat?: Intl.DateTimeFormat;
  /**
   * Severity names
   */
  readonly severityNames: ReadonlyMap<LogEventSeverity, string>;
}
