import { type LogEventSeverity } from '../severity/log-event-severity';
import { type LogFilterResult } from './log-filter-result';

/**
 * Severity log filter options
 */
export interface SeverityLogFilterOptions {
  /**
   * Result on match
   */
  readonly onMatch?: LogFilterResult;
  /**
   * Result on mismatch
   */
  readonly onMismatch?: LogFilterResult;
  /**
   * Severity
   */
  readonly severity: LogEventSeverity;
}
