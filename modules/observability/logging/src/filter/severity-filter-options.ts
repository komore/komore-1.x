import { type FilterResult } from './filter-result';

/**
 * Severity filter options
 */
export interface SeverityFilterOptions {
  readonly onMatch?: FilterResult;
  readonly onMismatch?: FilterResult;
}
