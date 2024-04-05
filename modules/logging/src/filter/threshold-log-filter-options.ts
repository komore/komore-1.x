import { type LogEventSeverity } from '../severity/log-event-severity';

/**
 * Threshold log filter options
 */
export interface ThresholdLogFilterOptions {
  /**
   * Minimum severity
   */
  readonly minimumSeverity: LogEventSeverity;
}
