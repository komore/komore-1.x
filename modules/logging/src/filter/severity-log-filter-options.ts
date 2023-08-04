import { type LogFilterResult } from './log-filter-result';

/**
 * Severity log filter options
 */
export interface SeverityLogFilterOptions {
  readonly onMatch?: LogFilterResult;
  readonly onMismatch?: LogFilterResult;
}
