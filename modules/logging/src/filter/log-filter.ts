import { type LogEventRecord } from '../record/log-event-record';
import { type LogFilterResult } from './log-filter-result';

/**
 * Log filter
 */
export interface LogFilter {
  (logEventRecord: LogEventRecord): LogFilterResult;
}
