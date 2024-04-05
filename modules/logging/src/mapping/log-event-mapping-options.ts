import { type LogEventSeverity } from '../severity/log-event-severity';

/**
 * Log event mapping options
 */
export interface LogEventMappingOptions {
  /**
   * Severity
   */
  readonly severity?: LogEventSeverity;
}
