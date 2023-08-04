import { type LogEventSeverity } from '../event/log-event-severity';

/**
 * Log event mapping
 */
export interface LogEventMapping {
  /**
   * Appender name
   */
  readonly appenderName: string;
  /**
   * Log event severity
   */
  readonly severity: LogEventSeverity;
}
