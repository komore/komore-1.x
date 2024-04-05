import { type LogEventSeverity } from '../../severity/log-event-severity';

/**
 * Pattern log layout options
 */
export interface PatternLogLayoutOptions {
  /**
   * Date and time formatter
   */
  readonly dateTimeFormat?: Intl.DateTimeFormat;
  /**
   * Pattern string
   */
  readonly pattern: string;
  /**
   * Severity names
   */
  readonly severityNames: ReadonlyMap<LogEventSeverity, string>;
}
